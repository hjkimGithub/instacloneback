import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        searchPhotos(keyword: String!): [Photo]
    }
`;

export default typeDefs;