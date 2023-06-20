import excuteQuery from "../../db-library-index";
export async function updateDataKelas(id, data, lastData) {
  // console.log(id, "id di library terakhir");
  // console.log(data, "data di library terakhir");
  const value = lastData.value;
  const user = {
    value: data.value,
    label: data.value,
    code: data.code,
  };
  console.log(value, "value kelas in update library");
  // console.log(user, "value of update library");
  try {
    const results = await excuteQuery({
      query:
        "UPDATE daftar_kelas SET value = ?, label = ?, code = ? WHERE id = ?",
      values: [user.value, user.label, user.code, id],
    });
    // const result2 = await excuteQuery({
    //   query: `UPDATE santri_list SET kelas = ? WHERE kelas = ${lastData}`,
    //   values: [value],
    // });
    const hasil = results[0];
    // const hasil2 = result2;
    console.log(results, "results di update kelas lib");
    return hasil;
  } catch (error) {
    console.log(error);
    return [];
  }
}
