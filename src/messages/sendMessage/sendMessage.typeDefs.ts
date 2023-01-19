import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        sendMessage(payload: String!, roomId: Int, userId: Int): MutationResponse!
    }
`;

export default typeDefs;