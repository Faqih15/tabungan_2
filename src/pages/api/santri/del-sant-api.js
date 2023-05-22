import { delSantri } from "@lib/santri/del-sant-lib";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const requestMethod = req.method;
    const id = req.body;
    switch (requestMethod) {
      case 'DELETE':
        // console.log(req.body, "req req req req req req")
        // console.log(res, "res res res res res res res res res res ")
        delSantri(id)
        res.status(200).json({ message: 'berhasil new santri'})
       // handle other HTTP methods
      default:
        res.status(200).json({ message: 'Create user API'})
    }
  }
}