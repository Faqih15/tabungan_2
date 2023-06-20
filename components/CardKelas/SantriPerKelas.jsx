import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// import Link from "next/link";
export default function SantriPerKelas({ color, spk }) {
  //   console.log(spk, "kelas di spk");
  const [listSPK, setlistSPK] = useState([]);
  //   const [first, setfirst] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/data-kelas/santri/${spk}`);
        const data = await response.json();
        setlistSPK(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      //   console.log(listSPK, "listSPK di SPK baris 17");
    }
    fetchData();
  }, [spk]);
  console.log(listSPK, "listSPK di SPK baris 21");
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
                Data Santri Per Kelas
              </h3>
            </div>
          </div>
        </div>
        <section className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="thead-mb-10">
                <th
                  className={
                    "px-7 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  NO
                </th>
                <th
                  className={
                    "px-7 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
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
                  Nim
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Ortu
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Kelas
                </th>
                <th
                  className={
                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Edit Profil
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

            <tbody className="py-5 bg-slate-300">
              {listSPK.map((santri, index) => {
                return (
                  <tr key={santri.id} className="">
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
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
                        {santri.nama}
                      </span>
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
                      <Link
                        href={{
                          pathname: `/admin/santri/edit/${santri.id}`,
                        }}
                        className="bg-transparent hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                      >
                        <span>✏️</span>
                      </Link>
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

SantriPerKelas.defaultProps = {
  color: "light",
};

SantriPerKelas.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
