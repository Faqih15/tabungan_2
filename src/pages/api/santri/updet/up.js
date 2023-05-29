import { getSantri } from "@lib/santri/updet/updet-lib";

export default async function updateSantri(req, res) {
  // console.log(req, "req req");
  if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    const newId = body.userId;
    const data = body.newData;
    // console.log(data, "newData up api");

    try {
      const respon = await getSantri(newId, data);
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
