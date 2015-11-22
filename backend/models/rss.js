var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RSSSchema   = new Schema({
    name: String,
    url: String,
    rssUrl: String
});

module.exports = mongoose.model('RSS', RSSSchema);

