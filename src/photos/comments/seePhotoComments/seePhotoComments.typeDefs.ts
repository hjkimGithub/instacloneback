import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    seePhotoComments(id: Int!): [Comment]
  }
`;

export default typeDefs;