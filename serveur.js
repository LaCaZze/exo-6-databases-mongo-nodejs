const express = require('express')
const app = express()


// Route qui pointe vers l'index
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
// })

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/michael';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server !!");

  db.close();
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("michael");
  dbo.collection("personnages").find({}).toArray( function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



app.listen(3023)
