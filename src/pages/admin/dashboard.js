import React from "react";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

import Sidebar from "components/Sidebar/Sidebar";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

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
            {/* <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              src="/img/team-2-800x800.jpg"
              title="Woman holding a mug"
            /> */}
            <div className="border border-black bg-white rounded-xl	 p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Admin only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Daftarkan Data Santri ke Koperasi
                </div>
                <p className="text-gray-700 text-base">
                  PENDAFTARAN NAMA SANTRI MELIPUTI DATA: NAMA SANTRI, NOMOR
                  INDUK, ALAMAT, ORANGTUA DAN KELAS.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="/img/team-2-800x800.jpg"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}
