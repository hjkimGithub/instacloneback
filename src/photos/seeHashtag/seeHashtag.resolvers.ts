import client from "../../client";

const resolvers = {
    Query: {
        seeHashtag: (_, {hashtag}) => client.hashtag.findUnique({
            where: {
                hashtag
            },
        })
    }
}

export default resolvers;