import excuteQuery from "../db-library-index";

export async function deleteAdmin(id) {
  try {
    if (id) {
      console.log(id);
      const result = await excuteQuery({
        query: `DELETE FROM admin_list WHERE id = ${id}`,
      });
      return result;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
