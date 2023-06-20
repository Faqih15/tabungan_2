import excuteQuery from "@lib/db-library-index";

export async function gfdelKelas(id) {
  console.log(id, "id di library");
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM santri_list WHERE id_kelas = ${id}`,
    });
    const hasil = results.map((result) => {
      return {
        nama: result.nama,
        kelas: result.id_kelas,
      };
    });
    // const hasil = results[0].map();
    console.log(hasil[0].kelas, "hasil.kelas map library");
    const kelas = hasil[0].kelas;
    return kelas;
  } catch (error) {
    console.log(error, "ini error bang");
    return [];
  }
}
