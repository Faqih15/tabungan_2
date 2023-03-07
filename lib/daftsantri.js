import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";

export async function createSantriProfile() {
  // console.log(password);
  // console.log(excuteQuery, "pool dr db");

  //   const email = "sudo@gmail.com";
  //   const password = "gaskencoy";

  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: uuidv4(),
    nama,
    nim,
    alamat,
    orangtua,
    kelas,
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    pass,
    hash,
  };

  try {
    console.log(user, "user");
    const result = await excuteQuery({
      query:
        "INSERT INTO users (id, nama, nim, alamat, orangtua, kelas, createdAt, pass, hash) VALUES(?, ?, ?, ?, ?)",
      values: [
        user.id,
        user.nama,
        user.nim,
        user.alamat,
        user.orangtua,
        user.kelas,
        user.createdAt.toString(),
        user.pass,
        user.hash,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return user;
}
