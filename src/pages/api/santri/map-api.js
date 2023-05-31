import { mapSantri } from "@lib/santri/map-lib";

export default async function mapdatasantri(req, res) {
  if (req.method === "GET") {
    try {
      const users = await mapSantri();
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

