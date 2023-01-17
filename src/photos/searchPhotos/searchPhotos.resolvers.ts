import client from "../../client";

const resolvers = {
    Query: {
        searchPhotos: (_, { keyword }) =>
          client.photo.findMany({
            where: {
              caption: {
                startsWith: keyword,
              },
            },
          }),
      },
}

export default resolvers;