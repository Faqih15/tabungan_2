import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";
import excuteQuery from "../db-library-index";
import moment from "moment";

export async function newSantri({ nama, nim, orangtua, kelas, password }) {
  console.log("lib/user.jsx");
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    nama,
    nim,
    orangtua,
    hash,
    salt,
    kelas,
  };
  try {
    console.log(user, "user");
    const result = await excuteQuery({
      query:
        "INSERT INTO santri_list (createdAt, nama, nim, orangtua, hash, salt, kelas) VALUES( ?, ?, ?, ?, ?, ?, ?)",
      values: [
        user.createdAt.toString(),
        user.nama,
        user.nim,
        user.orangtua,
        user.hash,
        user.salt,
        user.kelas,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error, "error in query/value");
  }
  return user;
}
