import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";

export async function createSantriProfile({nama, nim, orangtua, kelas, password}) {
  // console.log(password);  // console.log(excuteQuery, "pool dr db");
  // const email = "sudo@gmail.com";
  // const password = "gaskencoy";
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    nama,
    nim,
    orangtua,
    kelas,
    hash,
    salt,
  };
  try {
    console.log(user, "user");

    const result = await excuteQuery({
      query:
        "INSERT INTO santri_new (createdAt, nama, nim, orangtua, kelas, hash, salt) VALUES( ?, ?, ?, ?, ?, ?, ?)",
      values: [
        user.createdAt.toString(),
        user.nama,
        user.nim,
        user.orangtua,
        user.kelas,
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
