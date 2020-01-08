const graphql = require('graphql');

const {
   GraphQLNonNull,
   GraphQLObjectType,
   GraphQLBoolean
} = graphql;

module.exports = new GraphQLObjectType({
   name: 'PageInfo',
   fields: {
      hasNextPage: {
         type: new GraphQLNonNull(GraphQLBoolean),
      },
      hasPreviousPage: {
         type: new GraphQLNonNull(GraphQLBoolean),
      },
   },
});