import excuteQuery from "@lib/db-library-index";

export async function getIdAdmin(id) {
    console.log(id, "id di library get-id");
  try {
    const results = await excuteQuery({
      query: `SELECT * FROM admin_list WHERE id = ${id}`,
    });
    const hasil = results[0];
    console.log(hasil, "hasil dr query");
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
