import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";

export async function createUser() {
  // console.log(password);
  const email = "mujahidfaqihuddin@gmail.com";
  const password = "gaskencoy";

  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    email,
    hash,
    salt,
  };

  try {
    console.log(user,"user");
    const result = await excuteQuery({
      query:
        "INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)",
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
