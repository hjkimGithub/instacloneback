require('dotenv').config();
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import {typeDefs, resolvers} from "./schema";
import { getUser } from "./users/users.utils";

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
  // schema,
  context: async ({req}) => {
    // console.log(req.headers)
    return {
      // token: req.headers.token
      loggedInUser: await getUser(req.headers.token),
    };
  }
});

const PORT = process.env.PORT;

const app = express();
apollo.applyMiddleware({ app });
app.use(logger("tiny"));
app.use("/static", express.static("uploads"));

app.listen({port: PORT}, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})
  // .then(() => console.log(`Server is running on http://localhost:${PORT}/`));