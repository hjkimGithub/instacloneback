import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        deleteComment(id: Int!): MutationResponse!
    }
`;

export default typeDefs;

