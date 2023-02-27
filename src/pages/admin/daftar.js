import React, { useEffect } from "react";
import { useRouter } from "next/router";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

// import Admin from "layouts/Admin.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

import Sidebar from "components/Sidebar/Sidebar";

function Settings() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
      </div>
      <div className="relative md:ml-64">
        <HeaderStats />
      </div>
      <div className="flex flex-wrap pl-60">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
          {/* bg-orange-400 */}
        </div>

        
      </div>
    </>
  );
}
export default Settings;
// Settings.layout = Admin;

// const router = useRouter();

// useEffect(() => {
//   // Always do navigations after the first render
//   router.push("/admin/daftar", undefined, { shallow: true });
// }, []);

// useEffect(() => {
//   // The counter changed!
// }, [router.query.counter]);
//
// jurus terakhir kalo pindah page masih render
