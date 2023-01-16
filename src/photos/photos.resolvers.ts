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
        })
    }
}

export default resolvers;
