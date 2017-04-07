'use strict';
import config from './config';
import { getClient } from './es-client';
import _map from 'lodash/map';

import express from 'express';
import bodyParser from 'body-parser';
let app = express();
import { fetch } from './rss';
import { Feed } from '../models/feed';

let client = getClient();

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
        let output = _map(response.hits.hits, (result) => {
            return Feed.fromElastic(result);
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
        fetch(response._source.url, res);
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

