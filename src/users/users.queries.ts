import client from "../client";
import { Resolvers } from "../types";

const queries: Resolvers = {
    Query: {
      seeProfile: (_, { username }) =>
        client.user.findUnique({
          where: {
            username,
          },
        }),
    },
};

export default queries;