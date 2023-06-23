import excuteQuery from "../../db-library-index";

export async function updateDataSantri(id, data) {
  const user = {
    nama: data.nama,
    nim: data.nim,
    orangtua: data.orangtua,
    kelas: data.kelas,
  };
  try {
    const result = await excuteQuery({
      query:
        "UPDATE santri_list SET nama = ?, nim = ?, orangtua = ?, id_kelas = ? WHERE id = ?",
      values: [user.nama, user.nim, user.orangtua, user.kelas, id],
    });

    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
