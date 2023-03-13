// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createSantriProfile } from "@lib/daftsantri";

console.log("halaman create-user");
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req, "req");
    console.log(res, "res");
    createSantriProfile();
    res.status(200).json({ message: "berhasil menginput data" });
    return;
  }
  // if (req.method === "DELETE") {
  //   console.log(req.query);
  //   console.log(req.body);
  //   // createSantriProfile()
  //   res.status(200).json({ message: "berhasil menginput data" });
  //   return;
  // }
  res.status(200).json({ name: "create-user.js" });
}
