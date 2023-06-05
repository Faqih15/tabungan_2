import React, { useEffect, useState } from "react";
import Select from "react-select";

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

export default function CardSettings({ props }) {
  const [listKelas, setlistKelas] = useState([]);
  useEffect(() => {
    fetch("/api/data-kelas/get")
      .then((res) => res.json())
      .then((data) => setlistKelas(data));
  }, []);

  const [datapertama, setdatapertama] = useState({
    nama: "",
    nim: "",
    orangtua: "",
    kelas: "",
    password: "",
  });
  const mendaftar = (e) => {
    setdatapertama({ ...datapertama, [e.target.name]: e.target.value });
  };
  const daftar = (e) => {
    e.preventDefault();
    const newsantri = async () => {
      const data = {
        nama: datapertama.nama,
        nim: datapertama.nim,
        orangtua: datapertama.orangtua,
        kelas: datapertama.kelas,
        password: datapertama.password,
      };
      const response = await fetch("/api/santri/new-api", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(data, "data 115");
      return response.json();
    };
    newsantri().then((data) => {
      console.log(data, "data.message");
    });
    e.target.reset();
  };

  const backtosantri = () => {
    window.location.href = "/admin/santri";
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2 bg-neutral-100">
        <section className="rounded-t mb-0 px-6 py-6"></section>
        <section className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={daftar}>
            <h6 className="text-black text-sm mb-10 font-bold uppercase">
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
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={mendaftar}
                    type="text"
                    id="nama"
                    name="nama"
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
                    min="30001"
                    max="39099"
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
                    options={listKelas}
                    type="text"
                    id="kelas"
                    name="kelas"
                    styles={menuStyle}
                    className=" border-0 px-1 py-1 text-slate-900 bg-white rounded text-sm 
                    shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Pilih Kelas Santri"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    onChange={mendaftar}
                    type="text"
                    id="password"
                    name="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan Password Anda"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75"
              onClick={backtosantri}
            >
              DAFTARKAN MURID
            </button>

            <hr className="mt-6 border-b-1 border-blueGray-300 pb-2" />
          </form>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await props.csp();
  console.log("server console");

  return { props: { data } };
}
