import excuteQuery from "../db-library-index";

export async function mapAdmin() {
  try {
    const results = await excuteQuery({
      query: "SELECT * FROM admin_list",
    });

    const users = results.map((result) => {
      return {
        id: result.id,
        email: result.email,
      };
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}
