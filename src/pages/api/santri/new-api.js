import { newSantri } from "@lib/santri/new-lib";
import { check } from "@lib/santri/check";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body, "data body yg dikirim");
  const nim = body.nim;
  const cek = await check(nim);
  const ceknim = cek[0] ? cek[0].nim : null;

  if (ceknim) {
    console.log("SUDAH ADA COY NOMER", nim);
    res.status(200).json({ message: `santri dengan nim ${nim} sudah ada` });
  } else {
    console.log("CREATE PROFIL SANTRI BARU");
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case "POST":
        newSantri(body);
        res.status(200).json({ message: "berhasil new santri" });
      // handle other HTTP methods
      default:
        res.status(200).json({ message: "Create user API" });
    }
  }
}
