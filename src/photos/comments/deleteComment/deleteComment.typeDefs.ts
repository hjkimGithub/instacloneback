import { gql } from "apollo-server";

const typeDefs = gql`
    type DeleteCommentMutation {
        ok: Boolean!
        error: String
    }
    type Mutation {
        deleteComment(id: Int!): DeleteCommentMutation!
    }
`;

export default typeDefs;

