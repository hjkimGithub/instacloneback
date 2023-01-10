require('dotenv').config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser } from "./users/users.utils";

const server = new ApolloServer({
  schema,
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

server
  .listen()
  .then(() => console.log(`Server is running on http://localhost:${PORT}/`));