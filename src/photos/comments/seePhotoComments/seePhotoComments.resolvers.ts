import client from "../../../client";

const resolvers = {
  Query: {
    seePhotoComments: (_, { id }) =>
      client.comment.findMany({
        where: {
          photoId: id,
        },
        orderBy: {
          createdAt: "asc",
        },
      }),
  },
};

export default resolvers;