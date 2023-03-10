import React from "react";

function Pagination() {
  return (
    <>
      <div className="relative md:ml-64 ">
        <div className="text-xl text-red-800 bg-slate-400">
          Halaman Keterangan link atau pagination
        </div>
        <span className=" flex flex-wrap px-3 py-1 mt-10 text-black bg-pink-500 font-bold">
          <span className="mr-5">localhost:3000</span>
          <span>halaman transaksi santri</span>
        </span>
      </div>
    </>
  );
}

export default Pagination;
