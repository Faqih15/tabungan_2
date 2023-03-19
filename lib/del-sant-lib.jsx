import excuteQuery from "./db";

export async function delSantri() {
  try {
    const result = await excuteQuery({
      query: "DELETE FROM santri_new WHERE id = ?",
      params: [santriId],
    });
    

    const users = results.map((result) => {
      return {
        nama: result.nama,
        nim: result.nim,
        orangtua: result.orangtua,
        kelas: result.kelas,
      };
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}