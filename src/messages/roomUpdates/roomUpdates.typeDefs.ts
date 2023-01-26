import { gql } from "apollo-server";
import { type } from "os";

const typeDefs = gql`
    type Subscription {
        roomUpdates: Message
    } 
`;

export default typeDefs;