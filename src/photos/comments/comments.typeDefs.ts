import { gql } from "apollo-server";

const typeDefs = gql`
  type Comment {
    id: Int!
    user: User!
    photo: Photo!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;

export default typeDefs;