import excuteQuery from "../db-library-index";

export async function deleteKelas(id) {
  try {
    const result = await excuteQuery({
      query: `DELETE FROM daftar_kelas WHERE id = ${id}`,
    });
    return result;
    // const users = check.map((result) => {
    //   return {
    //     id: result.id,
    //     createdAt: result.createdAt,
    //     nama: result.nama,
    //     nim: result.nim,
    //     orangtua: result.orangtua,
    //     kelas: result.id_kelas,
    //   };
    // });
    // console.log(users, "users di delete kelas library");
    // if (!check) {
    //   const result = await excuteQuery({
    //     query: `DELETE FROM daftar_kelas WHERE id = ${id}`,
    //   });
    //   return result;
    // }
  } catch (error) {
    console.log(error);
    return [];
  }
}
