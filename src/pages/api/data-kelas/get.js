import { mapKelas } from "@lib/data-kelas/get";

export default async function getDataKelas(req, res) {
  if (req.method === "GET") {
    try {
      const users = await mapKelas();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
