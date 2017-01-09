var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('commentlist', ['commentlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/commentlist', function (req, res) {
  db.commentlist.find(function (err, docs) {
    // console.log(docs);
    res.json(docs);
  });
});

app.post('/commentlist', function (req, res) {
  // console.log(req.body);
  db.commentlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
