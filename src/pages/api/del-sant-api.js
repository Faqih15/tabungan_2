import { delSantri } from "@lib/del-sant-lib";

export default async function mapdatasantri(req, res) {
  if (req.method === "DELETE") {
    try {
      const users = await delSantri();
      // res.status(200).json({ message: 'Tampilkan santri', data: users });
      res.status(200).json(users);

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}
