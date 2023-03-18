import excuteQuery from "./db";

export async function mapSantri() {
  try {
    const results = await excuteQuery({
      query: "SELECT * FROM santri_new",
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