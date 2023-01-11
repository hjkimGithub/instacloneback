import { gql } from "apollo-server";

const typeDefs = gql`
    type FollowUserResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        followUser(username:String!): FollowUserResult
    }
`;

export default typeDefs;