import Head from "next/head";
import { Inter } from "next/font/google";
import React from "react";
import Login from "./transaction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("indexjs pages 3000");
  return (
    <>
      <Head>
        {/* <Dashboard /> */}
        <div>/auth/index</div>
        <Login ayam={"ayam index.js"} />
      </Head>
      <main></main>
    </>
  );
}
