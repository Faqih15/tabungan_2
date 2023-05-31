import excuteQuery from "../db-library-index";

export async function mapKelas() {
  try {
    const results = await excuteQuery({
      query: "SELECT * FROM daftar_kelas",
    });

    const kelas = results.map((result) => {
      return {
        value: result.value,
        label: result.label,
        code: result.code,
      };
    });

    return kelas;
  } catch (error) {
    console.log(error);
    return [];
  }
}
