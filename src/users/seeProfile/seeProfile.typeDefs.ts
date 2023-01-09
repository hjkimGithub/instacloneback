import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    seeProfile(username: String!): User
  }
`;

export default typeDefs;