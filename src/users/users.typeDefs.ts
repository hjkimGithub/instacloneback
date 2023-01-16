import { gql } from "apollo-server";

const typeDefs =  gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
        bio: String
        avatar: String
        followings: [User]
        followers: [User]
        totalFollowing: Int!
        totalFollowers: Int!
        isMe: Boolean!
        isFollowing: Boolean!
    }
`;


export default typeDefs;