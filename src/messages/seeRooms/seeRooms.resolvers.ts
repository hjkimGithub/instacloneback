import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolvers = {
    Query: {
        seeRooms: protectedResolver(async(_, __, {loggedInUser}) => {
            client.room.findMany({
                where: {
                    users: {
                        some: {
                            id: loggedInUser.id
                        }
                    }
                }
            })
        }) 
    }
}

export default resolvers;