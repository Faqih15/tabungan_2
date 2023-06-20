import { gfdelKelas } from "@lib/data-kelas/idfordelete/id";

export default async function gfDel(req, res) {
  console.log(req, "req id for delete kelas");
//   console.log(res, "res id for delete kelas");
  if (req.method === "GET") {
    const { id } = req.query;
    console.log(id, "id for delete kelas");
    try {
      const users = await gfdelKelas(id);
      res.status(200).json(users);
      console.log("====================================");
      console.log("Test TRY get to edit data kelas");
      console.log("====================================");
    } catch (error) {
      console.log(error);
      console.log("====================================");
      console.log("Test CATCH ERROR");
      console.log("====================================");
      res.status(500).json({ message: "catch error when get id daftar_kelas" });
    }
  } else {
    console.log("====================================");
    console.log("Test ELSE");
    console.log("====================================");
    res.status(400).json({ message: "else error when get id daftar_kelas  " });
  }
}
