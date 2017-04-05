const esClient = require('./es-client');
const path = require('path');

let client = esClient.getClient();

let repositoryName = 'backups';

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
