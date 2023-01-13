import { gql } from "apollo-server-express";

const typeDefs = gql`
	type SearchUsersResult {
		ok: Boolean!
		error: String
		users: [User]
	}
	type Query {
		searchUsers(keyword: String!, lastId: Int): SearchUsersResult
	}
`;

export default typeDefs;