import excuteQuery from "../db-library-index";

export async function newClass({ label, code }) {
  console.log("lib/user.jsx");
  console.log(label, code, "label dan code di library");

  const kelas = {
    label: label,
    code: code,
  };
  try {
    const result = await excuteQuery({
      query: "INSERT INTO daftar_kelas (value, label, code) VALUES(?, ?, ?)",
      values: [kelas.label, kelas.label, kelas.code],
    });
    console.log(result);
  } catch (error) {
    console.log("====================================");
    console.log(error, "error lib 28");
    console.log("====================================");
  }
}
