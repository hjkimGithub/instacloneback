require('dotenv').config();
import http from "http";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import {typeDefs, resolvers} from "./schema";
import { getUser } from "./users/users.utils";
import pubsub from "./pubsub";

// console.log(pubsub);

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
  // schema,
  context: async ({req}) => {
    // console.log(req.headers)
    if(req) {
      return {
        loggedInUser: await getUser(req.headers.token),
      }
    }
  }
});

const PORT = process.env.PORT;

const app = express();
// apollo.installSubscriptionHandlers(app);
apollo.applyMiddleware({ app });
app.use(logger("tiny"));
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})
  // .then(() => console.log(`Server is running on http://localhost:${PORT}/`));