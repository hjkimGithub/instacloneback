import { gql } from "apollo-server";

const typeDefs =  gql`
  type Query {
    seePhoto(id: Int!): Photo
  }
`;

export default typeDefs;