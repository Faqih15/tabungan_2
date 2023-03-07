// const { createdPool } = require("mysql");

// const pool = createdPool({
//   host: "localhost",
//   user: "root",
//   password: "gaskencoy",
//   port: 3306,
//   database: "tabungan",
// });

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "jahid",
//   password: "gaskencoy",
//   port: 3306,
//   database: "tabungan",
// });

// export default async function excuteQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

// export default async function excuteQuery({ query, values }) {
//   try {
//     connection.connect();
//     const results = await connection.query(query, values);
//     await connection.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

// connection.connect();

// module.export = connection;

// pool.getConnection((err) => {
//   if (err) {
//     console.log("Error connection to db");
//   }
//   console.log("connected to db.");
// });

// module.export = pool;

// db.js
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
