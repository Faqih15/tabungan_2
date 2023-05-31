import { mapAdmin } from "@lib/admin/get-lib";

export default async function mapDataAdmin(req, res) {
  if (req.method === "GET") {
    try {
      const admins = await mapAdmin();
      // res.status(200).json({ message: 'Tampilkan santri', data: users });
      res.status(200).json(admins);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "get admin error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
