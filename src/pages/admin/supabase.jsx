import React, { useEffect } from "react";
import Admin from "layouts/layoutAdmin.jsx";
import CardTableAdmin from "@components/CardsAdmin/CardTableAdmin";
import PropTypes from "prop-types";
import Link from "next/link";
import ConfirmAlert from "@components/Cards/CardAlertDelete";

import supabase from "@lib/supabaseClient";

export default function Home({ color }) {
  const [listAdmin, setlistAdmin] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("admin").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setlistAdmin(data);
      }
    };
    fetchData();
  }, []);
  console.log(listAdmin, "list admin 29");

  const handleDelete = (id) => {
    setlistAdmin((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <div className="">
      <>
        <Admin>
          {/* size kotak tabel */}
          <div className="flex flex-wrap mt-4 relative md:ml-5 md:mr-10">
            <div className="w-full mb-12 ">
              <>
                <div
                  className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
                  }
                >
                  <div className="rounded-t mb-0 px-4 py-3 border-0 bg-slate-200">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                        <h3
                          className={"font-semibold text-lg text-blueGray-700"}
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
                            const { data, error } = await supabase
                              .from("admin")
                              .insert({
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
                              "w-14 px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                            }
                          >
                            NO
                          </th>
                          <th
                            className={
                              "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            }
                          >
                            Nama
                          </th>
                          <th
                            className={
                              "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            }
                          >
                            Edit Admin
                          </th>
                          <th
                            className={
                              "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
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
            </div>
          </div>
        </Admin>
      </>
    </div>
  );
}
CardTableAdmin.defaultProps = {
  color: "light",
};
CardTableAdmin.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
