import { gql } from "apollo-server";

const typeDefs = gql`
  type Mutation {
    createComment(photoId: Int!, payload: String!): MutationResponse!
  }
`;

export default typeDefs;