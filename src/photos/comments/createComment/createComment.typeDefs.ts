import { gql } from "apollo-server";

const typeDefs = gql`
  type CreateCommentResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createComment(photoId: Int!, payload: String!): CreateCommentResult!
  }
`;

export default typeDefs;