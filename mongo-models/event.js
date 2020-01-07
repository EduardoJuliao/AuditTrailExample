const mongo = require('mongoose');
const Schema = mongo.Schema;

const eventSchema = new Schema({
   date: Date,
   name: String
});

module.exports = mongo.model('Event', eventSchema);