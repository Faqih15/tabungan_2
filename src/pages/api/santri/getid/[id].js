
import { getIdSantri } from "@lib/santri/getid/getid-lib";

export default async function getsant(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const users = await getIdSantri(id);
      res.status(200).json(users);
      console.log("====================================");
      console.log("Test TRY");
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
