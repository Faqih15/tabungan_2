import { getSPKLib } from "@lib/data-kelas/santri/spk-lib";

export default async function getSPK(req, res) {
  console.log(req, "req di getSPK api");
  // console.log(res, "res di getSPK api");
  if (req.method === "GET") {
    const { spk } = req.query;
    console.log(spk, "spk di [spk].js");
    try {
      const users = await getSPKLib(spk);
      res.status(200).json(users);
      console.log("====================================");
      console.log("Test TRY [id].js edit data kelas");
      console.log("====================================");
    } catch (error) {
      console.log(error);
      console.log("====================================");
      console.log("Test CATCH ERROR");
      console.log("====================================");
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    console.log("====================================");
    console.log("Test ELSE");
    console.log("====================================");
    res.status(400).json({ message: "Invalid request method" });
  }
}
