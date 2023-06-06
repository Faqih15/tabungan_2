import excuteQuery from "../../db-library-index";

export async function updateDataKelas(id, data) {
  // console.log(id, "id di library terakhir");
  // console.log(data, "data di library terakhir");

  const user = {
    value: data.value,
    label: data.value,
    code: data.code,
  };
//   console.log("us", id);
  console.log(user, "value of update library");
  try {
    const results = await excuteQuery({
      query:
        "UPDATE daftar_kelas SET value = ?, label = ?, code = ? WHERE id = ?",
      values: [user.value, user.label, user.code, id],
    });

    const hasil = results[0];
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
