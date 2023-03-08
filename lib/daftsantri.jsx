import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";
export async function createSantriProfile() {
  // console.log(password);  // console.log(excuteQuery, "pool dr db");
  const email = "sudo@gmail.com";
  const password = "gaskencoy";
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: 223344,
    nama: "jahid",
    nim: 1200,
    alamat: "gomok",
    orangtua: "abu jahid",
    kelas: 1,
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    pass: password,
    hash: password,
  };
  try {
    console.log(user, "user");

    const result = await excuteQuery({
      query:
        "INSERT INTO data_santri (id, nama, nim, alamat, orangtua, kelas, createdAt, pass, hash) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
