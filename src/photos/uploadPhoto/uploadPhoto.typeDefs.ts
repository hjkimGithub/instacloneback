import { gql } from "apollo-server";

const typeDefs =  gql`
  type Mutation {
    uploadPhoto(file: String!, caption: String): Photo
  }
`;

export default typeDefs