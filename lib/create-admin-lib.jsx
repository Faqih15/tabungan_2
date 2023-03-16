import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";

export async function createUser({email, password}) {
  console.log("lib/user.jsx");
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    email,
    hash,
    salt,
  };

  try {
    console.log(user, "user");
    const result = await excuteQuery({
      query:
        "INSERT INTO admin_create (createdAt, email, hash, salt) VALUES(?, ?, ?, ?)",
      values: [
        user.id,
        user.createdAt.toString(),
        user.email,
        user.hash,
        user.salt,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return user;
}
