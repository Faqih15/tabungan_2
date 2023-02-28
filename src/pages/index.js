import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "components/Sidebar/Sidebar.js";
import Dashboard from "./admin/dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
      <Dashboard />
      </Head>
      <main></main>
    </>
  );
}

