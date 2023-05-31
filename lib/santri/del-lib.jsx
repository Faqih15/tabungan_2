import excuteQuery from "../db-library-index";

export async function delSantri(id) {
  try {
    if (id) {
      console.log(id);
      const result = await excuteQuery({
        query: `DELETE FROM santri_list WHERE id = ${id}`,
      });
      return result;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
