import { getSantri } from "@lib/getsant-lib";

// export default async function getsant(req, res) {
//   if (req.method === "GET") {
//     const id = req.body;
//     console.log(id, "const id = req.body");
//     try {
//       const users = await getSantri();
//       res.status(200).json(users);
//       console.log(req, "req req req req req req");
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid request method' });
//   }
// }
export default async function getsant(req, res) {
  if (req.method === "GET") {
    console.log(req, "req");
    console.log(res, "res");
    const { paramID } = req.query;
    console.log(paramID, "paramID");

    try {
      const users = await getSantri(paramID);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}
