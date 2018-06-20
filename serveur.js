const express = require('express')
const app = express()
app.use('/static', express.static('static'));


// Route qui pointe vers l'index
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/michael';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server !!");

  db.close();
});


app.get('/data', function (req, res) {
  // res.sendFile(__dirname + '/')

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("michael");
    dbo.collection("personnages").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
})

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("michael");
//   var myobj = { name: "Company Inc", genre: "Highway 37" };
//   dbo.collection("personnages").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// }); 



app.listen(3023)
