import { deleteAdmin } from "@lib/admin/delete";

export default function apiForDeleteAdmin(req, res) {
  if (req.method === "DELETE") {
    const requestMethod = req.method;
    const id = req.body;
    switch (requestMethod) {
      case "DELETE":
        deleteAdmin(id);
        res.status(200).json({ message: "berhasil del santri" });
      default:
        res.status(200).json({ message: "Create user API" });
    }
  }
}
