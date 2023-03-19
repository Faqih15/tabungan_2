import { mapSantri } from "@lib/map-santri-lib";

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

// export default function mapdatasantri(req, res) {
//   if (req.method === "GET") {
//     const requestMethod = req.method;
//     const body = JSON.parse(req.body);
//     switch (requestMethod) {
//       case 'GET':
//         console.log(body)
//         mapSantri()
//         res.status(200).json({ message: 'tampilkan santri'})
//       // handle other HTTP methods
//       default:
//         res.status(200).json({ message: 'show user API'})
//     }
//   }
// }