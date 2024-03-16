const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const connectDB = require('./config/db'); 
const authMiddleware = require('./config/auth');

connectDB;



const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
  );
});
