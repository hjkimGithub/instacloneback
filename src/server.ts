require('dotenv').config();
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import {typeDefs, resolvers} from "./schema";
import { getUser } from "./users/users.utils";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  // schema,
  context: async ({req}) => {
    // console.log(req.headers)
    return {
      // token: req.headers.token
      // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczMjQzNDg0fQ.0LanWZ5ozcfN2a088Kik7HncNtIFqWCGf2heHauveeI"
      loggedInUser: await getUser(req.headers.token),
    };
  }
});

const PORT = process.env.PORT;

const app = express();
app.use(logger("tiny"));
server.applyMiddleware({ app });

app.listen({port: PORT}, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})
  // .then(() => console.log(`Server is running on http://localhost:${PORT}/`));