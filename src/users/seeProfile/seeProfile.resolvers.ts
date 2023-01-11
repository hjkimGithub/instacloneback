import client from "../../client";

const resolvers =  {
  Query: {
    seeProfile: (_, { username }) =>
      client.user.findUnique({
        where: {
          username,
        },
        include: {
          followers: true,
          followings: true,
        }
      }),
  },
};

export default resolvers;