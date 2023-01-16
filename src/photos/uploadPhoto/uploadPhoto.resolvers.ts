import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolvers = {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashtagObjs = [];
        if (caption) {
          /// parse caption
          // get or create Hashtags
          const hashtags = caption.match(/#[\w]+/g);
          // console.log(hashtags);
          hashtagObjs = hashtags.map((hashtag) => ({
            where: {
              hashtag
            },
            create: {
              hashtag
            }
          }))
          // console.log(hashtagObjs);
        }
        // save the photo WITH the parsed hashtags
        // add the photo to the hashtags
        return client.photo.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id
              },
            },
            file,
            caption,
            ...(hashtagObjs.length > 0 && ({
              hashtags: {
                connectOrCreate: hashtagObjs
              }
            })),
          },
        });
      }
    ),
  },
};

export default resolvers;