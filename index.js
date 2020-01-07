const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const mongo = require('mongoose');

const app = express();

const port = 4000;

mongo.connect('mongodb://localhost:27017/AuditTrail', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
mongo.connection.once('open', () => {
   console.log('Connected to Mongo Database.');
})

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));

app.listen(port, () => {
   console.log(`server up and running on http://localhost:${port}`);
})