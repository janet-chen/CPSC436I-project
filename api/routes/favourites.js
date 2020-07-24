var express = require('express');
var router = express.Router();

// gets URI from .env 
var uri = process.env.DB_URI;
var MongoClient = require('mongodb').MongoClient;

/* GET favourites listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
        }
        console.log('Connected...');
        const collection = client.db("travelr").collection("favourites");
        collection.find({}).toArray((err, result) => {
            if (err) console.log(err)
            else {
                return res.send(result);
            }
        })
        // perform actions on the collection object
        client.close();
    });
});


/* POST a favourite */
router.post('/', function(req, res, next) {
    const newFavourite = req.body;
    // newMessage.id = uuid();
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
        }
        console.log('Connected...');
        const collection = client.db("travelr").collection("favourites");
        collection.insertOne(
            newFavourite
        )
        // perform actions on the collection object
        client.close();
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(newFavourite);
});

/* DELETE a favourite */
router.delete('/:id', function(req, res, next) {
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
        }
        console.log('Connected...');
        const collection = client.db("travelr").collection("favourites");
        collection.deleteOne({id: req.params.id});
        client.close();
    });
    res.send(req.params.id);
})

module.exports = router;
