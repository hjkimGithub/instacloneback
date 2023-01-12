import client from "../../client";

const resolvers = {
    Query: {
        seeFollowers: async(_, {username, page}) => {
            const ok = await client.user.findUnique({ 
                where: { 
                    username
                },
                select: {
                    id: true
                }
            });
            // console.log(ok);
            if(!ok) {
                return {
                    ok: false,
                    error: "User not found"
                }
            }
            const followers = await client.user.findUnique({
                where: {username}})
            /*        
                // .followers();
                // console.log(aFollowers.length);
                const bFollowers = await client.user.findMany({
                    where: {
                        followings: {
                            some: {
                                username,
                            }
                        }
                    }
                })
                // console.log(bFollowers.length);
            */  
                .followers({
                    take:5,
                    skip:(page - 1) * 5
                });
            const totalFollowers = await client.user.count({
                where: {
                    followings: {
                        some: {
                            username
                        }
                    }
                }
            })
            return {
                ok: true,
                followers,
                totalPages: Math.ceil(totalFollowers /5)
            }
        }
    }
}

export default resolvers;