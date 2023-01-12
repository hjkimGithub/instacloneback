import { gql } from "apollo-server";

const typeDefs = gql`
    type SeeFollowersQuery {
        ok:Boolean!
        error:String
        followers:[User]
        totalPages: Int
    }
    type Query {
        seeFollowers(username:String!, page:Int!): SeeFollowersQuery!
    }
`

export default typeDefs;