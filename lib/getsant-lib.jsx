import excuteQuery from "./db";

export async function getSantri(paramID) {

  console.log(paramID, "paramID");
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM santri_list WHERE id = ${paramID}`,
      params: [paramID],
    });
    const hasil = results[0];
    console.log(hasil, "hasil");
    // const users = results.map((result) => {
    //   return {
    //     id: result.id,
    //     createdAt: result.createdAt,
    //     nama: result.nama,
    //     nim: result.nim,
    //     orangtua: result.orangtua,
    //     kelas: result.kelas,
    //   };
    // });

    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}