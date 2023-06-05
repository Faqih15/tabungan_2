import excuteQuery from "../../db-library-index";

export async function updateDataSantri(id, data) {
  // console.log(id, "id di library terakhir");
  // console.log(data, "data di library terakhir");

  const user = {
    nama: data.nama,
    nim: data.nim,
    orangtua: data.orangtua,
    kelas: data.kelas,
  };
  console.log("us", id);
  console.log(user, "value of update library");
  try {
    const result = await excuteQuery({
      query:
        "UPDATE santri_list SET nama = ?, nim = ?, orangtua = ?, kelas = ? WHERE id = ?",
      values: [user.nama, user.nim, user.orangtua, user.kelas, id],
    });

    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
