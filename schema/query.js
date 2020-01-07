const graphql = require('graphql');

const {
   GraphQLObjectType,
   GraphQLID,
   GraphQLList,
} = graphql;

const Event = require('../mongo-models/event');
const EventType = require('./types/eventType');

const eventType = new GraphQLObjectType({
   name: 'AuditQuery',
   fields: {
      event: {
         type: EventType,
         args: {
            id: {
               type: GraphQLID
            }
         }
      },
      events: {
         type: new GraphQLList(EventType),
         resolve(parent, args) {
            return Event.find({});
         }
      },
   }
});

module.exports = eventType;