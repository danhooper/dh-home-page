const esClient = require('./es-client');
const path = require('path');
const minimist = require('minimist');
const repositoryName = 'backups';
const config = require('./config');

let argv = minimist(process.argv.slice(2));
let command = argv['_'][0];

let commands = {
    backup: createBackup,
    restore: restoreBackup,
    createIndex: createIndex,
    deleteIndex: deleteIndex,
}

commands[command](argv);


function createBackup() {
    let client = esClient.getClient();
    client.snapshot.createRepository({
        repository: repositoryName,
        body: {
            type: 'fs',
            settings: {
                location: path.join(__dirname, 'backups')
            }
        }
    }).then(() => {
        let backupName = 'backup-' + new Date().toISOString().toLowerCase();
        return client.snapshot.create({
            repository: repositoryName,
            snapshot: backupName,
        });
    }).catch((err) => {
        console.log('Error creating backup', err);
    });
}

function restoreBackup(argv) {
    console.log(argv);
    let client = esClient.getClient();
    console.log(config, config.indexName);
    client.indices.close({
        index: config.indexName,
    }).then(() => {
        return client.snapshot.restore({
            repository: repositoryName,
            snapshot: argv.backupName,
            body: {
                indices: config.indexName,
            }
        });
    }).catch((err) => {
        console.log('Error restoring backup', err);
    });

}

function createIndex(argv) {
    let client = esClient.getClient();
    client.indices.create({
        index: config.indexName,
        mappings: {
            feed: {
                properties: {
                    title: {
                        type: 'string'
                    }
                }
            }
        }
    }).catch((err) => {
        console.log('Error: ', err);
    });
}

function deleteIndex(argv) {
    let client = esClient.getClient();
    client.indices.delete({
        index: config.indexName
    });
}
