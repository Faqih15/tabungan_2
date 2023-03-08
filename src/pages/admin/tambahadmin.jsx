import React, { useEffect } from "react";
import { createUser } from "lib/user";

function tambahAdmin({ data }) {
  console.log("client console");

  return <div>tambahAdmin</div>;
}

export async function getServerSideProps() {
  const data = await createUser();
  console.log("server console");

  // Pass data to the page via props
  return { props: { data } };
}

export default tambahAdmin;

// Fetch data from external API
// const res = await fetch(`https://.../data`)
// const data = await res.json()
// const data = {};

// useEffect(() => {
//   const fetchData = async () => {
//     const data = await createUser();
//   };
//   fetchData();
// });
// console.log(data);
