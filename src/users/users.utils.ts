import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async(token) => {
    try {
        if(!token) {
            return null;
        }
        const verifiedToken: any = await jwt.verify(token, process.env.SECRET_KEY);
        if("id" in verifiedToken) {
            const user = await client.user.findUnique({
                where:{
                    id: verifiedToken["id"]
                }
            })
            if(user) {
                return user;
            }
        }     
    } catch {
        return null;
    }
}

export function protectedResolver(ourResolver) {
    return function(root, args, context, info) {
        if(!context.loggedInUser) {
            const query = info.operation.operation === "query";
            if (query) {
                return null;
            } else {
                return {
                    ok: false,
                    error: "Please log in to perform this action.",
                };
            }
        }
        return ourResolver(root, args, context, info);
    }
}