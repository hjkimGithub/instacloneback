import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        seeRooms: [Room]
    }
`;

export default typeDefs;