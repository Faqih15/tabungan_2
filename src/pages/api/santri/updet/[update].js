import { updateSantri } from "@lib/santri/edit/update-lib";

export default async function getsant(req, res) {
  if (req.method === "PUT") {
    console.log(req.method, "req.method");
    console.log(req.body, "req.body");
    console.log(req.headers, "req.headers");
    const { update } = req.query;
    console.log(update, "up=req.query");

    try {
      // const respon = await updateSantri(update);
      // res.status(200).json(respon);
      console.log("try berhasil");
    } catch (error) {
      console.log(error);
      console.log("catch error");

      res.status(500).json({ message: "berhasil update" });
    }
  } else {
    res.status(400).json({ message: "gagal update santri coy" });
    console.log("else error");
  }
}
// export default function handler(req, res) {
//   if (req.method === "UPDATE") {
//     const meth = req.method;
//     const id = req.body;
//     const { update } = req.query;

//     console.log(update,"up=req.query");
//     // console.log(req.body,"req body");
//     switch (requestMethod) {
//       case 'UPDATE':
//         // delSantri(id)
//         res.status(200).json({ message: 'berhasil UPDATE santri'})
//       default:
//         res.status(200).json({ message: 'Create user API'})
//     }
//   }
// }
