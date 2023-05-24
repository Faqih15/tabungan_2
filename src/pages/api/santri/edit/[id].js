import { getSantri } from "@lib/id-lib";

export default async function getsant(req, res) {
    if (req.method === "GET") {
      const { id } = req.query;
      try {
        const users = await getSantri(id);
        res.status(200).json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(400).json({ message: 'Invalid request method' });
    }
  }
  