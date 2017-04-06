import { getClient } from './es-client';
import * as path from 'path';
import minimist from 'minimist';
let repositoryName = 'backups';
import config from './config';

let argv = minimist(process.argv.slice(2));
let command = argv['_'][0];

let commands = {
    backup: createBackup,
    restore: restoreBackup,
    createIndex: createIndex,
    deleteIndex: deleteIndex,
}

try {
    commands[command](argv);
} catch (err) {
    console.log('Error running: ', command, argv, err);
}

function createRepository() {
    let client = getClient();
    return client.snapshot.createRepository({
        repository: repositoryName,
        body: {
            type: 'fs',
            settings: {
                location: config.backupDir,
            }
        }
    }).catch((err) => {
        console.log('Error creating repository', err);
    });
}


function createBackup() {
    let client = getClient();
    createRepository().then(() => {
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
    let client = getClient();
    console.log(config, config.indexName);
    createRepository().then(() => {
        return client.indices.close({
            index: config.indexName,
        });
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
    let client = getClient();
    client.indices.create({
        index: config.indexName,
        body: {
            mappings: {
                feed: {
                    properties: {
                        title: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    }).catch((err) => {
        console.log('Error: ', err);
    });
}

function deleteIndex(argv) {
    let client = getClient();
    client.indices.delete({
        index: config.indexName
    });
}
