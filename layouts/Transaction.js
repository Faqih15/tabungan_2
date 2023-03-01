import React from "react";

import Sidebar from "components/Sidebar/Sidebar";

export default function Transaction({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-red-500 ">
        <div className="text-xl text-red-800 bg-slate-400">
          Halaman Transaksi Santri Ma'had Al Islam Surakarta
        </div>
      </div>
    </>
  );
}
