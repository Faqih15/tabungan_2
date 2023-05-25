import excuteQuery from "../db-library-index";

export async function mapSantri() {
  try {
    const results = await excuteQuery({
      query: "SELECT * FROM santri_list",
    });

    const users = results.map((result) => {
      return {
        id: result.id,
        createdAt: result.createdAt,
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