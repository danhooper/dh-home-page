import elasticsearch from 'elasticsearch';

export { getClient };

function getClient() {
    return new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });
}

