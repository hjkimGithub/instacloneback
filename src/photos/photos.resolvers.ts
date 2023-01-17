import client from "../client";

const resolvers = {
    Photo: {
        user: ({userId}) => {
            // console.log(parent);
            return client.user.findUnique({
                where: {
                    id: userId,
                }
            })
        },
        hashtag: ({id}) => client.hashtag.findMany({
            where: {
                photos: {
                    some: {id}
                }
            }
        }),
        likes: ({id}) => client.like.count({where: {
            photoId: id
        }}),
    },
    Hashtag: {
        photos: ({id}, {page}, {loggedInUser}) => {
            return client.hashtag.findUnique({
                where: {
                    id,
                }
            }).photos();
        },
        totalPhotos: ({id}) => client.photo.count({
            where: {
                hashtags: {
                    some: {
                        id
                    }
                }
            }
        })
    },
}

export default resolvers;
