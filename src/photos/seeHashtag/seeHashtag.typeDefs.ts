import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        seeHashtag(hashtag: String!): Hashtag
    }
`

export default typeDefs;