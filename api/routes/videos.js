var express = require('express');
const { google } = require('googleapis');
var router = express.Router();

async function query (req) {
  const youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyCtPGmjQdjKTo5hJMiPnBcx2b4Sy1vXZpY'
  });
  const response = await youtube.search.list({
    part: 'id,snippet',
    fields: 'items/id',
    q: `travel ${req.body.destination}`,
    maxResults: 6
  });
  return response;
}

async function callback (req, res) {
  let response = await query(req);
  let idArray = response.data.items.map(videoObj => videoObj.id.videoId);
  return res.status(200).json({
    ids: idArray
  });
}

router.post('/', function (req, res, next) {
  callback(req, res);
});

module.exports = router;
