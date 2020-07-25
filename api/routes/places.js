const axios = require('axios');
var express = require('express');
var router = express.Router();
const { Client } = require('@googlemaps/google-maps-services-js');
const client = new Client({});
let axiosInstance = axios.create({});

async function getPlaceDetails () {
  client
    .placesNearby({
      params: {
        location: { lat: -33.8670522, lng: 151.1957362 },
        key: 'AIzaSyAKDqQlGYP74UfAeSQDG6h9bKrN6hA0wAA',
        radius: 25000,
        keyword: 'attractions',
        inputtype: 'textquery'
      },
      axiosInstance
    })
    .then((r) => {
      let result = Object.values(r.data.results)[0];
      let photoRef = result.photos[0].photo_reference;
      let resultName = result.name;
      console.log('++++++++++++++ ' + resultName);
      client.placePhoto({
        params: {
          photoreference: photoRef,
          key: 'AIzaSyAKDqQlGYP74UfAeSQDG6h9bKrN6hA0wAA',
          maxheight: 500
        },
        responseType: 'arraybuffer'
      }, axiosInstance)
        .then(r => {
          console.log('++++++++++++++ ' + r);
          return { name: resultName, photo: r };
        })
        .catch(err => {
          console.log('------------- ' + err);
        });
    })
    .catch((e) => {
      console.log('------------- ' + e.response.data.error_message);
    });
}
async function callback (req, res) {
  let response = await getPlaceDetails();
  let idArray = response.data.items.map(videoObj => videoObj.id.videoId);
  return res.status(200).json({
    ids: idArray
  });
}
router.post('/', function (req, res, next) {
  callback(req, res);
});
module.exports = getPlaceDetails;
