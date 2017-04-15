let express = require('express')
let graphqlHTTP = require('express-graphql')
let { buildSchema } = require('graphql')

let schema = buildSchema(`
  type Query {
    greet: String!
  }
`)

let root = {
  greet: () => {
    return 'Hello from the GraphQL Server!'
  }
}

let app = express()

app.use('/gimme-data', graphqlHTTP({
  schema: schema,
  rootValue: root,
}))

app.listen(4000, () => {
  console.log('GraphQL Server listening on port 4000...')
})