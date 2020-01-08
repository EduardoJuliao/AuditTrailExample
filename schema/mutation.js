const Event = require('../mongo-models/event');
const EventType = require('./types/eventType');

const {
   GraphQLNonNull,
   GraphQLObjectType,
   GraphQLString
} = require('graphql');

const {
   GraphQLJSONObject
} = require('graphql-type-json')


module.exports = new GraphQLObjectType({
   name: 'Mutation',
   fields: {
      addEvent: {
         type: EventType,
         args: {
            name: {
               type: new GraphQLNonNull(GraphQLString)
            },
            obj: {
               type: new GraphQLNonNull(GraphQLJSONObject)
            }
         },
         resolve(parent, args) {
            console.log(args);
            const event = new Event({
               name: args.name,
               date: new Date(),
               obj: args.obj
            });
            console.log(event);
            return event.save();
         }
      }
   }
});