const graphql = require('graphql');
const graphqlDate = require('graphql-iso-date');

const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLID
} = graphql;

const {
   GraphQLDateTime
} = graphqlDate;

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
      }
   })
});