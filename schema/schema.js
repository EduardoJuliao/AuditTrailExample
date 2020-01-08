const mutation = require('./mutation');
const auditQuery = require('./query');

const {
   GraphQLSchema,
} = require('graphql');

module.exports = new GraphQLSchema({
   query: auditQuery,
   mutation: mutation
});