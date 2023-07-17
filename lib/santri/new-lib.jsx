import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";
import excuteQuery from "../db-library-index";
import moment from "moment";

export async function newSantri({
  nama,
  nim,
  orangtua,
  id_kelas,
  password,
  id_card,
}) {
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
    id_kelas,
    id_card,
  };
  try {
    console.log(user, "user");
    const result = await excuteQuery({
      query:
        "INSERT INTO santri_list (createdAt, nama, nim, orangtua, hash, salt, id_kelas, idcard) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        user.createdAt.toString(),
        user.nama,
        user.nim,
        user.orangtua,
        user.hash,
        user.salt,
        user.id_kelas,
        user.id_card,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error, "error in query/value");
  }
  return user;
}
