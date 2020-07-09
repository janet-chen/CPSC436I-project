var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var Favourite = new Schema({
    id:  String, // String is shorthand for {type: String}
    url: String,
    mediaType:   String,
    title: String,
    location: String,
    comment: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
  });

