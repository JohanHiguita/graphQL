const {buildSchema} = require("graphql");

module.exports = buildSchema(`
  type Client {
    id: Int
    name: String
    phone: String
  }

  type Query {
    clients: [Client]
    client(id: Int): Client
  }

  type Mutation {
    addClient(name: String, phone: String): Client
  }
`);