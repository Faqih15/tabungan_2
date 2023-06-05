import excuteQuery from "../../db-library-index";

export async function updateDataAdmin(id, data) {
  const user = {
    email: data.email,
  };
  console.log("us", id);
  console.log(user, "value of update library");
  try {
    const result = await excuteQuery({
      query: "UPDATE admin_list SET email = ?  WHERE id = ?",
      values: [user.email, id],
    });

    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
