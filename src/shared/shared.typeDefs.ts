import { gql } from "apollo-server";

const typeDefs = gql`
    type MutationResponse {
        ok: Boolean!
        error: String
    }
`;

export default typeDefs