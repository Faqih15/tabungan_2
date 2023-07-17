// import excuteQuery from "@lib/db-library-index";

// export async function check(nim) {
//   console.log(nim, "nim di library for check");
//   try {
//     const result = await excuteQuery({
//       query: `SELECT * FROM santri_list WHERE nim = '${nim}'`,
//     });
//     const hasil = result.map((result) => {
//       return {
//         nama: result.nama,
//         nim: result.nim,
//       };
//     });
//     console.log(hasil, "hasil select by nim");
//     return result;
//   } catch (error) {
//     console.log(error, "error in query/value");
//   }
// }
