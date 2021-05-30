const express = require('express');
const {graphqlHTTP} = require("express-graphql");

const graphqlSchema = require("./graphQL/schema");
const graphqlResolver = require("./graphQL/resolvers");
const app = express();
const port = 3000;


app.use('/graphql', graphqlHTTP({
	schema: graphqlSchema,
	rootValue: graphqlResolver,
	graphiql: true,
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/graphql`)
})