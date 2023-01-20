import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        seeRoom(id: Int!): Room
    }
`;

export default typeDefs;