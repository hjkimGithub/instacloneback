import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        readMessage(id: Int!): MutationResponse!
    }
`;

export default typeDefs;