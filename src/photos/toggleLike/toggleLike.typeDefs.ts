import { gql } from "apollo-server";

const typeDefs = gql`
  type ToggleLikeResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    toggleLike(id: Int!): ToggleLikeResult
  }
`;

export default typeDefs;