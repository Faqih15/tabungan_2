import excuteQuery from "../db";

export async function listIdSantri() {
  try {
    const results = await excuteQuery({
      query: "SELECT id FROM santri_list",
    });

    const users = results.map((result) => {
      return {
        id: result.id,
      };
    });
    console.log(users, "users");
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}