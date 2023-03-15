import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import HeaderStats from "components/Headers/HeaderStats.jsx";
import FooterAdmin from "components/Footers/FooterAdmin.jsx";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200 h-screen">
        <AdminNavbar />
        {/* </div> */}
        {/* <div className="relative md:ml-64 px-8"> */}
        <div className="">
          <HeaderStats />
        </div>
        <div className="px-4 md:px-10 mx-auto w-full zm-24 ">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
