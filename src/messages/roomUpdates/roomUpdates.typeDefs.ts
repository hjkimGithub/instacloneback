import { gql } from "apollo-server";

const typeDefs = gql`
    type Subscription {
        roomUpdates(id: Int!): Message
    } 
`;

export default typeDefs;