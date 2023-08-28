import excuteQuery from "../db-library-index";
export async function mapSantri() {
  try {
    const joinjoin = await excuteQuery({
      query: `SELECT dk.value, sl.nim, sl.nama, sl.orangtua, sl.idcard, sl.id, sl.duit
              FROM santri_list AS sl
              JOIN daftar_kelas AS dk ON (dk.id = sl.id_kelas);`,
    });
    const datajoin = joinjoin.map((result) => {
      return {
        id: result.id,
        nama: result.nama,
        nim: result.nim,
        orangtua: result.orangtua,
        kelas: result.value,
        idcard: result.idcard,
        saldo: result.duit,
      };
    });
    console.log(datajoin, "data join baris 20");
    return datajoin;
  } catch (error) {
    console.log(error, "error try catch bang");
    return [];
  }
}
