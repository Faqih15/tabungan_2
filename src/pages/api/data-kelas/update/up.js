import { updateDataKelas } from "@lib/data-kelas/update/update";

export default async function updateKelas(req, res) {
  // console.log(req, "req req");
  if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    const newId = body.userId;
    const data = body.newData;
    // console.log(data, "newData up api");

    try {
      const respon = await updateDataKelas(newId, data);
      res.status(200).json(respon);
      console.log("====================================");
      console.log("TRY berhasil di api js update kelas");
      console.log("====================================");
    } catch (error) {
      console.log(error);
      console.log("CATCH ERROR di api js update kelas");
      res.status(500).json({ message: "berhasil update" });
    }
  } else {
    res.status(400).json({ message: "gagal update santri coy" });
    console.log("REQ.METHOD ERROR");
  }
}
