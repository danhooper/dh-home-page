var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var express = require('express');
var app = express();
var rss = require('./rss');

var feeds = [{
    id: 1,
    url: 'http://feeds.arstechnica.com/arstechnica/index?format=xml',
    title: 'ArsTechnica'
}];

app.get('/feeds', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(feeds);
});

app.get('/feeds/:id/article', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    rss.fetch(feeds[0].url, res);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
