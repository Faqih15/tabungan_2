import excuteQuery from "./db";

export async function getSantri(paramID) {
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM santri_list WHERE id = ${paramID}`,
      params: [paramID],
    });
    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
