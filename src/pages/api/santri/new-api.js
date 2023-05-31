import { newSantri } from "@lib/santri/new-lib";

export default function handler(req, res) {
  console.log(req, res, "req res");
  if (req.method === "POST") {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    console.log(body, "body 8");
    switch (requestMethod) {
      case 'POST':
        console.log(body, "body 11 body body")
        newSantri(body)
        res.status(200).json({ message: 'berhasil new santri'})
      // handle other HTTP methods
      default:
        res.status(200).json({ message: 'Create user API'})
    }
  }
}