import { getSantri } from "@lib/getsant-lib";

export default async function getsant(req, res) {
    if (req.method === "GET") {
    //   console.log(req, "req method");
    //   console.log(res, "res id");
      const { id } = req.query;
    //   console.log(id, "paramID");
    //   res.end(`Post: ${id}`);
  
      try {
        const users = await getSantri(id);
        res.status(200).json(users);
        console.log(users, "users idjs");
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(400).json({ message: 'Invalid request method' });
    }
  }
  