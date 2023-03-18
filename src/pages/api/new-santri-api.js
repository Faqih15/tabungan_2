// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { createUser } from "@lib/create-admin-lib";
import { createSantriProfile } from "@lib/new-santri-lib";

export default function handler(req, res) {
  if (req.method === "POST") {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':
        console.log(body)
        createSantriProfile(body)
        res.status(200).json({ message: 'berhasil new santri'})
      // handle other HTTP methods
      default:
        res.status(200).json({ message: 'Create user API'})
    }
  }
}
