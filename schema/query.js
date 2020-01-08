const {
   GraphQLObjectType,
   GraphQLID,
   GraphQLList,
} = require('graphql');

const {
   getMongoDbQueryResolver,
   getGraphQLQueryArgs
} = require('graphql-to-mongodb')


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
         args: getGraphQLQueryArgs(EventType),
         resolve: getMongoDbQueryResolver(EventType,
            (filter, projection, options, obj, args, context) => {
               return Event.find(filter, projection, options);
            })
      },
   }
});

module.exports = eventType;