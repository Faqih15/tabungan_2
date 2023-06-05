import { updateDataAdmin } from "@lib/admin/update/update";

export default async function updateAdmin(req, res) {
  // console.log(req, "req req");
  if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    const newId = body.userId;
    const data = body.newData;
    // console.log(data, "newData up api");

    try {
      const respon = await updateDataAdmin(newId, data);
      res.status(200).json(respon);
      console.log("====================================");
      console.log("TRY berhasil");
      console.log("====================================");
    } catch (error) {
      console.log(error);
      console.log("CATCH ERROR");
      res.status(500).json({ message: "berhasil update" });
    }
  } else {
    res.status(400).json({ message: "gagal update santri coy" });
    console.log("REQ.METHOD ERROR");
  }
}
