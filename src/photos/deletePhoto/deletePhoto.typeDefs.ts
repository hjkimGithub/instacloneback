import { gql } from "apollo-server";

const typeDefs = gql`
    type DeletePhotoResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        deletePhoto(id:Int!): DeletePhotoResult!
    }
`;

export default typeDefs;