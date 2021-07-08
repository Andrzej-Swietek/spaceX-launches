const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
// const path = require('path');
const app = express();

// ALoow cross origin
app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  );


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`SERVER IS WORKING on port ${PORT}`));