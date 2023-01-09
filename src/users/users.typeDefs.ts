import { gql } from "apollo-server";

const typeDefs =  gql`
    type User {
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
    type Mutation {
        createAccout(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ): User
    }
    type Query {
        seeProfile(username:String): User
    }
`;

export default typeDefs;