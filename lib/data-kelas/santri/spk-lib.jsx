import excuteQuery from "@lib/db-library-index";

export async function getSPKLib(kelas) {
  console.log(kelas, "kelas di library spk");
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM santri_list WHERE kelas = '${kelas}'`,
    });
    // console.log(results, "results in library");

    const santribyKelas = results.map((result) => {
      return {
        id: result.id,
        nama: result.nama,
        nim: result.nim,
        orangtua: result.orangtua,
        kelas: result.kelas,
      };
    });

    console.log(santribyKelas, "santri by kelas");

    return santribyKelas;
  } catch (error) {
    console.log(error);
    return [];
  }
}
