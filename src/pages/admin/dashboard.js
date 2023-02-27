import React from "react";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

import Sidebar from "components/Sidebar/Sidebar";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardTable from "components/Cards/CardTable";

export default function dashboard() {
  return (
    <div>
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
        </div>
        <div className="relative md:ml-64">
          <HeaderStats />
        </div>
        <div className=" relative ml-60 px-7">
          <section className="px-4 md:px-10 max-w-sm w-full lg:max-w-full lg:flex mx-auto">
            <div className="border border-black bg-white rounded-xl	 p-4 flex flex-col justify-between leading-normal">
              <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                  <CardTable />
                </div>
                <div className="w-full mb-12 px-4">
                  <CardTable color="dark" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}
