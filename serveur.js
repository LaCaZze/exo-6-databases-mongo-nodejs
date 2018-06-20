const express = require('express')
var bodyParser = require("body-parser");

const app = express()
// app.use('/static', express.static('static'));
app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: false }))

// Route qui pointe vers l'index
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


//Première étape qui me permet de me connecter à mongo
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

// Route 2 : qui fait appel à ma fonction d'affichage de ma base de données.
app.get('/data', function (req, res) {
  // res.sendFile(__dirname + '/')

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("michael");
    dbo.collection("personnages").find({}).toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.send(result);
      db.close();
    });
  });
})

// app.post('/', function (req, res) {
//   var nombre11 = parseInt(req.body.num1);
//   console.log(nombre11);
//   var nombre22 = parseInt(req.body.num2);
//   console.log(nombre22);

//   res.end(nombre11 + "" + nombre22 + "");


// })




app.post('/ajout', function (req, res) {
  var prenom = req.body.prenom;
  var genre = req.body.genre;
  console.log(req.body.prenom);
  // res.send("");


  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("michael");
    var myobj = { name: prenom, genre: genre};
    dbo.collection("personnages").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
})

app.listen(3023)
