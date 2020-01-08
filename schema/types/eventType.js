const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLID
} = require('graphql');

const {
   GraphQLDateTime
} = require('graphql-iso-date');

const {
   GraphQLJSONObject
} = require('graphql-type-json')

module.exports = new GraphQLObjectType({
   name: 'Event',
   fields: () => ({
      id: {
         type: GraphQLID
      },
      name: {
         type: GraphQLString
      },
      date: {
         type: GraphQLDateTime
      },
      obj: {
         type: GraphQLJSONObject
      }
   })
});