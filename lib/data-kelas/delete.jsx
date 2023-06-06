import excuteQuery from "../db-library-index";

export async function deleteKelas(id) {
  try {
    if (id) {
      console.log(id);
      const result = await excuteQuery({
        query: `DELETE FROM daftar_kelas WHERE id = ${id}`,
      });
      return result;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
