import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ConfirmAlert from "./CardAlertDelete";

export default function CardTableAdmin({ color }) {
  const [listAdmin, setlistAdmin] = useState([]);
  useEffect(() => {
    fetch("/api/admin/get-api")
      .then((res) => res.json())
      .then((data) => setlistAdmin(data));
  }, []);
  
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
            </div>
          </div>
        </div>
        <section className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="thead-mb-10">
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
                  Hapus Profil
                </th>
              </tr>
            </thead>
            <tbody className="py-5">
              {listAdmin.map((admin) => {
                return (
                  <tr key={admin.id} className="bg-slate-300">
                    <th className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 text-left">
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
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1">
                      <Link
                        href={{
                          pathname: `/admin/admin/edit/${admin.id}`,
                        }}
                        class="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                      >
                        <span>✏️</span>
                      </Link>
                    </td>

                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1">
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
