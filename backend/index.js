var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json([{url : 'http://feeds.arstechnica.com/arstechnica/index?format=xml'}, title: 'ArsTechnica']);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
