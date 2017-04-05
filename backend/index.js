'use strict';
const indexName = 'dh-home-page';
var _ = require('lodash');

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var rss = require('./rss');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var feeds = [{
    url: 'http://feeds.arstechnica.com/arstechnica/index?format=xml',
    link: 'https://arstechnica.com',
    title: 'ArsTechnica'
}];

app.get('/feed', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.search({
        index: indexName,
        type: 'feed',
        _source: ['title', 'url', 'link']
    }).then((response) => {
        let output = _.map(response.hits.hits, (result) => {
            let foo = {
                id: result._id,
                title: result._source.title,
                link: result._source.link,
                url: result._source.url,
            };
            return foo;
        });
        res.json(output);
    });
});

app.get('/feed/:id/article', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    rss.fetch(feeds[0].url, res);
});

app.options('/feed', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({});
});

app.post('/feed', function(req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.create({
        index: indexName,
        type: 'feed',
        body: req.body
    }).then((response) => {
        res.json(response);
    })
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

let createIndex = () => {
    client.indices.create({
        index: indexName,
        mappings: {
            feed: {
                properties: {
                    title: {
                        type: 'string'
                    }
                }
            }

        }
    }).then(() => {
        client.create({
            index: indexName,
            type: 'feed',
            body: feeds[0]
        });
    });
};

client.indices.delete({
    index: indexName
}).then(createIndex).catch(createIndex);

//{
//  "properties": {
//      "name": {
//            "type": "string"
//                }
//                  }
//                  }}}

