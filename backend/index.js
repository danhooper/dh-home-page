'use strict';
const config = require('./config');
const esClient = require('./es-client');
var _ = require('lodash');

var elasticsearch = require('elasticsearch');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var rss = require('./rss');

let client = esClient.getClient();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/feed', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.search({
        index: config.indexName,
        type: 'feed',
        _source: ['title', 'url', 'link']
    }).then((response) => {
        let output = _.map(response.hits.hits, (result) => {
            return {
                id: result._id,
                title: result._source.title,
                link: result._source.link,
                url: result._source.url,
            };
        });
        res.json(output);
    });
});

app.get('/feed/:id/article', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.get({
        index: config.indexName,
        type: 'feed',
        id: req.params.id
    }).then((response) => {
        rss.fetch(response._source.url, res);
    });


});

app.options('/feed', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({});
});

app.post('/feed', function(req, res) {
    console.log('creating feed', req.body);
    console.log({
        index: config.indexName,
        type: 'feed',
        body: req.body
    });
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.index({
        index: config.indexName,
        type: 'feed',
        body: req.body
    }).then((response) => {
        res.json({id: response._id});
    }).catch((err) => {
        console.log('Error creating feed', err);
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

//{
//  "properties": {
//      "name": {
//            "type": "string"
//                }
//                  }
//                  }}}

