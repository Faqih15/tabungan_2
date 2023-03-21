import Head from "next/head";
import React from "react";
import Login from "./transaction";

export default function Home() {
  console.log("indexjs pages 3000");
  return (
    <>
      <Head>
        {/* <Dashboard /> */}
        <div>/auth/index</div>
        <Login/>
      </Head>
      <main></main>
    </>
  );
}
