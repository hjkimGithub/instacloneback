import { gql } from "apollo-server";

const typeDefs = gql`
    type SeeFollowingsResult {
        ok: Boolean!
        error: String
        followings: [User]
    }
    type Query {
        seeFollowings(username: String!, lastId: Int): SeeFollowingsResult!
    }
`

export default typeDefs;