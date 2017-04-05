let elasticsearch = require('elasticsearch');

module.exports.getClient = getClient;

function getClient() {
    return new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });
}

