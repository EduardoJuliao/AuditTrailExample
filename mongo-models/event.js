const mongo = require('mongoose');
const Schema = mongo.Schema;

const eventSchema = new Schema({
   date: Date,
   name: String,
   obj: JSON
});

module.exports = mongo.model('Event', eventSchema);