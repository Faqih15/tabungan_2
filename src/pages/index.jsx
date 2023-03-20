import { Inter } from "next/font/google";
import React from "react";
import Login from "./auth/transaction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Login ayam={"ayam index.js"} />
    </>
  );
}
