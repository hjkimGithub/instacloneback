import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import client from "../../client";

const resolvers = {
  Mutation: {
    editProfile: async (
      _,
      { firstName, lastName, username, email, password: newPassword },
      {token}
    ) => {
      // const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);  
      // console.log(verifiedToken);    
      // {
      //    id: ~~
      //    iat: ~~~
      // }
      const {id}:any = await jwt.verify(token, process.env.SECRET_KEY);
      let uglyPassword = null;
      if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
      }
      const updatedUser = await client.user.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          username,
          email,
          ...(uglyPassword && { password: uglyPassword }),
        },
      });
      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "Could not update profile.",
        };
      }
    },
  },
};

export default resolvers;