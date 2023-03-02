import React, { useState } from "react";
import Select from "react-select";
import excuteQuery from "../../db";
import Link from "next/link";

// components

const status = [
  {
    value: "Aliyah 1",
    label: "Aliyah 1",
    kode: "",
  },
  {
    value: "Aliyah 2",
    label: "Aliyah 2",
    kode: "",
  },
  {
    value: "Aliyah 3",
    label: "Aliyah 3",
    kode: "",
  },
  {
    value: "Mu'allimin 1",
    label: "Mu'allimin 1",
    kode: "",
  },
  {
    value: "Mu'allimin 2",
    label: "Mu'allimin 2",
    kode: "",
  },
  {
    value: "Mu'allimin 3",
    label: "Mu'allimin 3",
    kode: "",
  },
  {
    value: "Ahlu Kitabah",
    label: "Ahlu Kitabah",
    kode: "",
  },
  {
    value: "Munaqasyah",
    label: "Munaqasyah",
    kode: "",
  },
  {
    value: "Selesai Munaq",
    label: "Selesai Munaq",
    kode: "",
  },
];
const menuStyle = {
  menu: (base) => ({
    ...base,
    width: 350,
  }),
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "white" : "white",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "Gray",
  }),
};

export default function CardSettings() {
  // console.log(excuteQuery, "excuteQuery");
  const [data, setdata] = useState([]);

  const [datapertama, setdatapertama] = useState({
    nama: "",
    nim: "",
    alamat: "",
    orangtua: "",
    kelas: "",
    saldo: "",
  });

  const mendaftar = (e) => {
    setdatapertama({ ...datapertama, [e.target.name]: e.target.value });
    console.log(e.target.value, "e.target.value");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newdata = [...data];
    newdata.push(datapertama);
    setdata(newdata);
    e.target.reset();
  };
  console.log(data, "data baris 112");
  // console.log(datapertama, "DATA PERTAMA 108");

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2 bg-neutral-100">
        <section className="rounded-t mb-0 px-6 py-6">
          
        </section>
        <section className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={onSubmit}>
            <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nama Santri
                  </label>
                  <input
                    onChange={mendaftar}
                    type="text"
                    id="nama"
                    name="nama"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan Nama Santri"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nomor Induk
                  </label>
                  <input
                    onChange={mendaftar}
                    type="number"
                    id="nim"
                    name="nim"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan NIM Santri"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Alamat
                  </label>
                  <input
                    onChange={mendaftar}
                    type="text"
                    id="alamat"
                    name="alamat"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan Alamat Santri"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Orang Tua
                  </label>
                  <input
                    onChange={mendaftar}
                    type="text"
                    id="orangtua"
                    name="orangtua"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan Nama Orang Tua"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    KELAS
                  </label>
                  <Select
                    onChange={(e) =>
                      mendaftar({
                        target: { value: e.value, name: "kelas" },
                      })
                    }
                    blurInputOnSelect={false} //set by default, but to be sure
                    options={status}
                    type="text"
                    id="kelas"
                    name="kelas"
                    styles={menuStyle}
                    className=" border-0 px-1 py-1 text-slate-900 bg-white rounded text-sm 
                    shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Pilih Kelas Anda"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75 cursor-not-allowed"
            >
              SUBMIT FORM
            </button>

            <hr className="mt-6 border-b-1 border-blueGray-300 pb-2" />
            {/* 
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div> */}
          </form>
        </section>
      </div>
    </>
  );
}

