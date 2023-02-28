import React from "react";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

import Sidebar from "components/Sidebar/Sidebar";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardTable from "components/Cards/CardTable";

export default function Dashboard() {
  return (
    <div className="">
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
        </div>
        <div className="relative md:ml-64 px-8">
          <HeaderStats />
        </div>
        <div className="flex flex-wrap mt-4 relative md:ml-64 px-8">
          <div className="w-full mb-12 ">
            <CardTable />
          </div>
          <div className="w-full mb-12 bg-slate-900">
            <CardTable color="dark" />
          </div>
        </div>
      </>
    </div>
  );
}
