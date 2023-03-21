import excuteQuery from "./db";

export async function getSantri(id) {
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM santri_new`,
      // query: `SELECT * FROM santri_new  WHERE id = ${id}`,
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