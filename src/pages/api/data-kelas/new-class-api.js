
import { newClass } from "@lib/data-kelas/new-class-lib";

export default async function newKelas(req, res) {
  // console.log(req, "req req");
  //   console.log(req.method, "req api");
  const body = JSON.parse(req.body);
  //   console.log(body, "body api");

  if (req.method === "POST") {
    try {
      console.log(body, "body try");
      newClass(body);
      //   const respon = await newClassLibrary(newId, data);
      //   res.status(200).json(respon);
      console.log("====================================");
      console.log("TRY berhasil");
      console.log("====================================");
    } catch (error) {
      //   console.log(error);
      console.log("CATCH ERROR");
      //   res.status(500).json({ message: "berhasil update" });
    }
  } else {
    // res.status(400).json({ message: "gagal update santri coy" });
    console.log("REQ.METHOD ERROR");
  }
}
