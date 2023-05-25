import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
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

// FOLDER LIB ADALAH SERVER YANG HANYA BISA DIAKSES MENGGUNAKAN BACKEND
// CLIENT MENGAKSES FRONTEND -di project ini FE adlh folder component, pages/admin dan pages/auth
// BACKEND NYA DISINI ADALAH PAGES/API YG MENGEKSEKUSI LIB
// TEMPLATE ERROR JIKA LIB DIAKSES LANGSUNG DGN FE ADALAH " Error Module not found: fs"