import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        editComment(id:Int!, payload:String!): MutationResponse!
    }
`;

export default typeDefs;