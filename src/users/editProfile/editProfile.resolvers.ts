import fs from "fs";
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";

const resolverFn = async (
  _,
  { firstName, lastName, username, email, password: newPassword, bio },
  {loggedInUser, protectedResolver}
) => {
  // console.log(loggedInUser)
  // if(!loggedInUser) {
  //   throw new Error("You need to login.");
  // }
  // protectedResolver(loggedInUser);
  // const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);  
  // console.log(verifiedToken);    
  // {
  //    id: ~~
  //    iat: ~~~
  // }

  // const {filename, createReadStream} = await avatar;
  // console.log(filename, createReadStream)
  // const readStream = createReadStream();

  // temporary, when we use aws, not needed
  // const writeStream = fs.createWriteStream(process.cwd() + "/uploads/" + filename);
  // readStream.pipe(writeStream);

  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }
  const updatedUser = await client.user.update({
    where: {
      id: loggedInUser.id,
    },
    data: {
      firstName,
      lastName,
      username,
      email,
      ...(uglyPassword && { password: uglyPassword }),
      bio,
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
}

const resolvers = {
  Mutation: {
    editProfile: protectedResolver(
      resolverFn
    )// (root, args, context, info)
  },
};

export default resolvers;