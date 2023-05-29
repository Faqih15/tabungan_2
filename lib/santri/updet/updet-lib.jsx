import excuteQuery from "../../db-library-index";

export async function getSantri(id, data) {
  // console.log(id, "id di library terakhir");
  // console.log(data, "data di library terakhir");

  const user = {
    nama: data.nama,
    nim: data.nim,
    orangtua: data.orangtua,
    kelas: data.kelas,
  };
  console.log("us",id)
  console.log(user, "value of update library");
  try {
    // const results = await excuteQuery({
    //   query: `UPDATE santri_list SET nama = '${data.nama}' , nim = '${data.nim}' ,  orangtua = '${data.orangtua}' , kelas = '${data.kelas}' WHERE id = ${id}`,
    // });

    const result = await excuteQuery({
      query:
        "UPDATE santri_list SET nama = ?, nim = ?, orangtua = ?, kelas = ? WHERE id = ?",
      values: [user.nama, user.nim, user.orangtua, user.kelas,id ],
    });
    // user.id, // Menambahkan nilai ID sebagai parameter

    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

    // const result = await excuteQuery({
    //   query:
    //     "INSERT INTO santri_list (createdAt, nama, nim, orangtua, hash, salt, kelas) VALUES( ?, ?, ?, ?, ?, ?, ?)",
    //   values: [
    //     user.createdAt.toString(),
    //     user.nama, user.nim,
    //     user.orangtua,
    //     user.hash, user.salt,
    //     user.kelas,
    //   ],
    // });
    const hasil = results[0];
    // console.log(hasil, "hasil update library");
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
