import { gql } from "apollo-server";

const typeDefs = gql`
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    login(username: String!, password: String!): LoginResult!
  }
`;

export default typeDefs;