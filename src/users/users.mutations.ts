import client from "../client";
import bcrypt from "bcrypt";

const mutations = {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
      //   console.log(existingUser);
        // hash password
        const uglyPassword = await bcrypt.hash(password, 10);
        // save and return the user
        return client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
      } catch(e) {
        return e;
      }
      // check if username or email are already on DB.
     },
  },
};

export default mutations;