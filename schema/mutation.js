const graphql = require('graphql');
const Event = require('../mongo-models/event');
const EventType = require('./types/eventType');

const {
   GraphQLNonNull,
   GraphQLObjectType,
   GraphQLString
} = graphql;

module.exports = new GraphQLObjectType({
   name: 'Mutation',
   fields: {
      addEvent: {
         type: EventType,
         args: {
            name: {
               type: new GraphQLNonNull(GraphQLString)
            }
         },
         resolve(parent, args) {
            const event = new Event({
               name: args.name,
               date: new Date()
            });
            return event.save();
         }
      }
   }
});