import { deleteKelas } from "@lib/data-kelas/delete";

export default function apiDelKelas(req, res) {
  if (req.method === "DELETE") {
    const requestMethod = req.method;
    const id = req.body;
    switch (requestMethod) {
      case "DELETE":
        deleteKelas(id);
        res.status(200).json({ message: "berhasil del santri" });
      default:
        res.status(200).json({ message: "Create user API" });
    }
  }
}
