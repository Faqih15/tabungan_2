import React, { useEffect, useState } from "react";
import Select from "react-select";
import { datakelas } from "./DataKelas";
import CardTable from "./CardTable";
import { useRouter } from "next/router";

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

export default function CardEditSantri({ id }) {
  // const [firstData, setfirstData] = useState([]);
  // useEffect(() => {

  // }, []);

  const [firstData, setFirstData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFirstData(id)
        console.log(firstData,"berhasil");
       
      } catch (error) {
        console.log(error, "error bang error bang error bang error bang");
        console.log(firstData, "first data dlm 2");
      }
    };

    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = async () => fetch(`/api/getsant?paramID=${paramID}`, {
  //         method: "GET",
  //         // body: JSON.stringify(data),
  //       });
  //       // const data = await response.json();
  //       console.log(response, "response");
  //       setFirstData(paramID);
  //       // setFirstData(paramID);
  //       console.log(firstData, "first data 57");
  //     } catch (error) {
  //       console.log(error, "error bang error bang error bang error bang");
  //       console.log(firstData, "first data dlm 2");
  //     }
  //   };

  //   fetchData();
  // }, [paramID]);

  const router = useRouter();
  const ss = router.query;

  const edit = (e) => {
    console.log(firstData, "edit first data");
  };
  const saveEdit = (e) => {
    console.log("saveEdit");
    console.log(firstData, "edit first data");
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2 bg-neutral-100">
        {/* <section className="rounded-t mb-0 px-6 py-6"></section> */}
        <section className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={saveEdit}>
            <h6 className="text-black text-sm mt-8 mb-10 font-bold uppercase">
              Edit Santri by Index
              <p>Parameter ID: {id}</p>
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
                    onChange={edit}
                    type="text"
                    defaultValue={ss.nama}
                    id="nama"
                    name="nama"
                    placeholder="Edit Nama Santri"
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
                    onChange={edit}
                    type="number"
                    value={ss.nim}
                    id="nim"
                    name="nim"
                    min="30001"
                    max="39099"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Edit NIM Santri"
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
                    onChange={edit}
                    type="text"
                    value={ss.orangtua}
                    id="orangtua"
                    name="orangtua"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Edit Nama Orang Tua"
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
                      edit({
                        target: { value: e.value, name: "kelas" },
                      })
                    }
                    blurInputOnSelect={false} //set by default, but to be sure
                    options={datakelas}
                    value={ss.kelas}
                    type="text"
                    id="kelas"
                    name="kelas"
                    styles={menuStyle}
                    className=" border-0 px-1 py-1 text-slate-900 bg-white rounded text-sm 
                    shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Edit Kelas Santri"
                  />
                </div>
              </div>
              {/* <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    // onChange={mendaftar}
                    type="text"
                    id="password"
                    name="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="edit password disable dulu, dev males"
                    autoComplete="off"
                    required
                  />
                </div>
              </div> */}
            </div>
            <button
              type="submit"
              className=" bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75 uppercase"
            >
              save editing
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

  // Pass data to the page via props
  return { props: { data } };
}
