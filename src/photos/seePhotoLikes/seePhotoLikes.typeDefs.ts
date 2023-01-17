import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    seePhotoLikes(id: Int!): [User]
  }
`;

export default typeDefs;