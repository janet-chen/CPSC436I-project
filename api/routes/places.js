var express = require('express');
var axios = require('axios');
var router = express.Router();
const { Client } = require('@googlemaps/google-maps-services-js');
const client = new Client({});
let axiosInstance = axios.create({});

function getPlacePhoto (place) {
  return client.placePhoto({
    params: {
      photoreference: place.photos[0].photo_reference,
      key: 'AIzaSyAKDqQlGYP74UfAeSQDG6h9bKrN6hA0wAA',
      maxheight: 500
    },
    responseType: 'arraybuffer'
  }, axiosInstance)
    .then(photo => {
      let url = 'https://' + photo.request.socket._host + photo.request.path;
      return url;
    })
    .catch(err => {
      console.log(')))))))))))))' + err);
    });
  // var photos = place.photos;
  // return photos;
}

async function compactPlace (place) {
  // await getPlacePhoto(place)
  //   .then(url => {
  //     return {
  //       name: place.name,
  //       photo: url
  //     };
  //   })
  //   .catch(err => {
  //     console.log('?????????????? ' + err);
  //   });
  await client.placePhoto({
    params: {
      photoreference: place.photos[0].photo_reference,
      key: 'AIzaSyAKDqQlGYP74UfAeSQDG6h9bKrN6hA0wAA',
      maxheight: 500
    },
    responseType: 'arraybuffer'
  }, axiosInstance)
    .then(photo => {
      let url = 'https://' + photo.request.socket._host + photo.request.path;
      return Promise.resolve(url);
    })
    .catch(err => {
      console.log(')))))))))))))' + err);
    });
}

async function getPlaceDetails () {
  // try await -> get 400 with empty place objects
  return client
    .placesNearby({
      params: {
        location: { lat: -33.8670522, lng: 151.1957362 },
        key: 'AIzaSyAKDqQlGYP74UfAeSQDG6h9bKrN6hA0wAA',
        radius: 25000,
        keyword: 'attractions',
        inputtype: 'textquery'
      },
      timeout: 1000
    })
    .then((r) => {
      return Promise.all(r.data.results.map(place => {
        compactPlace(place);
      }));
    })
    .catch((e) => {
      console.log('------------- ' + e.response.data.error_message);
    });
}
async function callback (req, res) {
  await getPlaceDetails()
    .then((r) => {
      console.log('2++++++++++++++ ' + Object.keys(r[0].url));
      return res.status(200).json(
        [...r]
      );
    })
    .catch(err => {
      return res.status(400).json(err);
    });
  // let idArray = response.data.items.map(videoObj => videoObj.id.videoId);
}
router.post('/', function (req, res, next) {
  callback(req, res);
});
module.exports = router;
