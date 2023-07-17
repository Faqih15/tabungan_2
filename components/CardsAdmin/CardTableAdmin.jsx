import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ConfirmAlert from "./CardAlertDelete";

import supabase from "@lib/supabaseClient";

export default function CardTableAdmin({ color }) {
  // dokumentasi props color untuk mode gelap tidak dihapus
  // defaultProps, propTypes, mode light dark lihat di bagian paling bawah
  const [listAdmin, setlistAdmin] = React.useState([]);
  useEffect(() => {
    fetch("/api/admin/get-api")
      .then((res) => res.json())
      .then((data) => setlistAdmin(data));
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from("admin").select("*");
  //     if (error) {
  //       console.error("Error fetching data:", error);
  //     } else {
  //       setlistAdmin(data);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(listAdmin, "list admin 29");

  // useEffect(() => {
  //   async () => {
  //     const data = await supabase.from("admin").select("*");
  //     setlistAdmin(data);
  //     console.log(data, "data useEffect");
  //   };
  // });
  const handleDelete = (id) => {
    setlistAdmin((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 bg-slate-200">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Data Admin
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <Link
                href="/admin/admin/create-admin"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span>Add New Admin</span>
              </Link>
              <button
                onClick={async () => {
                  const { data, error } = await supabase.from("admin").insert({
                    email: "ketigaketiga@gmail.com",
                    hash: "hhhh",
                    salt: "ssss",
                    created_at: "2023-07-05T07:53:32.599948+00:00",
                    updated_at: "2023-07-05T07:53:32.599948+00:00",
                  });
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                Try Button
              </button>
            </div>
          </div>
        </div>
        <section className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="thead-mb-10">
                <th
                  className={
                    "w-14 px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  NO
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Nama
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Edit Admin
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Hapus Admin
                </th>
              </tr>
            </thead>

            <tbody className="py-5 bg-slate-300">
              {listAdmin.map((admin, index) => {
                return (
                  <tr key={admin.id} className="">
                    <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <span
                        className={
                          "ml-3 " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {index + 1}
                      </span>
                    </td>
                    <th className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
                      <span
                        className={
                          "ml-3 " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {admin.email}
                      </span>
                    </th>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <Link
                        href={{
                          pathname: `/admin/admin/edit/${admin.id}`,
                        }}
                        className="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                      >
                        <span>✏️</span>
                      </Link>
                    </td>

                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <ConfirmAlert
                        admin={admin}
                        id={admin.id}
                        handleDelete={handleDelete}
                      ></ConfirmAlert>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
CardTableAdmin.defaultProps = {
  color: "light",
};
CardTableAdmin.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
