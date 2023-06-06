import excuteQuery from "@lib/db-library-index";

export async function getKelasLib(paramID) {
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM daftar_kelas WHERE id = ${paramID}`,
      //   params: [paramID],
    });
    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
