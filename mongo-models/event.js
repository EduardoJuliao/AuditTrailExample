const mongo = require('mongoose');

const eventSchema = new mongo.Schema({
   date: Date,
   name: String,
   obj: JSON
});

module.exports = mongo.model('Event', eventSchema);