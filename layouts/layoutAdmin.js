import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-red-500 ">
        <AdminNavbar />
        {/* </div> */}
        {/* <div className="relative md:ml-64 px-8"> */}
        <div className="">
          <HeaderStats />
        </div>
        <div className="px-4 md:px-10 mx-auto w-full zm-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
