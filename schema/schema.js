const graphql = require('graphql');

const mutation = require('./mutation');
const auditQuery = require('./query');

const {
   GraphQLSchema,
} = graphql;

module.exports = new GraphQLSchema({
   query: auditQuery,
   mutation: mutation
});