import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import Dashboard from "./admin/home";
// import Transaction from "layouts/Transaction";
import React from "react";
import Login from "./auth/transaction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* <Dashboard /> */}
        <Login />
        {/* <div>ayam</div> */}
      </Head>
      <main></main>
    </>
  );
}
