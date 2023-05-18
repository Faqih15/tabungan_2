import { createUser } from "@lib/create-admin-lib";

export default function handler(req, res) {
  console.log(req, res, "req res");
  if (req.method === "POST") {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':
        console.log(body)
        createUser(body)
        res.status(200).json({ message: 'create admin success'})
      // handle other HTTP methods
      default:
        res.status(200).json({ message: 'Create admin API'})
    }
  }
}