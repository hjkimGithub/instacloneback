import client from "../../client";

const resolvers = {
  Query: {
    seePhoto: (_, { id }) =>
      client.photo.findUnique({
        where: {
          id,
        },
      }),
  },
};

export default resolvers;