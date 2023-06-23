import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ConfirmAlert from "./CardAlertDelete";
export default function CardTable() {
  const [listSantri, setlistSantri] = useState([]);
  const [dataayam, setdataayam] = useState([]);
  useEffect(() => {
    fetch("/api/santri/map-api")
      .then((res) => res.json())
      .then((data) => setlistSantri(data));
  }, []);
  const handleDelete = (id) => {
    setlistSantri((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0 bg-slate-200">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3 className="font-semibold text-lg text-blueGray-700">
                Data Tabungan Santri
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <Link
                href="/admin/santri/new-santri"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span>Add New Santri</span>
              </Link>
            </div>
          </div>
        </div>
        <section className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="thead-mb-10">
                <th className="px-7 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  NO
                </th>
                <th className="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  ID Card
                </th>
                <th className="px-7 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Nama
                </th>
                <th className="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Nim
                </th>
                <th className="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left  bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Ortu
                </th>
                <th className="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Kelas
                </th>
                <th className="px-7 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Action
                </th>
                <th className="align-middle border border-solid text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
              </tr>
            </thead>
            <tbody className="py-5 bg-slate-300">
              {listSantri.map((santri, index) => {
                return (
                  <tr key={santri.id} className="">
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <span className="ml-3 text-blueGray-600">
                        {index + 1}
                      </span>
                    </td>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      {santri.idcard}
                    </td>
                    <th className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
                      <span className="ml-3">{santri.nama}</span>
                    </th>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      {santri.nim}
                    </td>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <div className="flex">
                        <span> {santri.orangtua}</span>
                      </div>
                    </td>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="mr-2">{santri.kelas}</span>
                      </div>
                    </td>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                      <tr>
                        <td>
                          <Link
                            href={{
                              pathname: `/admin/santri/edit/${santri.id}`,
                            }}
                            className="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                          >
                            <span>✏️</span>
                          </Link>
                        </td>
                        <td>
                          <ConfirmAlert
                            santri={santri}
                            id={santri.id}
                            handleDelete={handleDelete}
                          ></ConfirmAlert>
                        </td>
                      </tr>
                    </td>
                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"></td>
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
