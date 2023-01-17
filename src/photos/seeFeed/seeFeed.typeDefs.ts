import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        seeFeed: [Photo]
    }
`;

export default typeDefs;