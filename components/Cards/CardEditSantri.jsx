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
  const [firstData, setFirstData] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        // Simulating an asynchronous API call
        const response = await fetch(`/api/santri/edit/${id}`);
        const data = await response.json();
        // Update the firstData state with the received data
        setFirstData(data);
        // console.log(data, "data");
        console.log(firstData, "firstData 52");
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);
  // const [first, setfirst] = useState([{ nama: "agus", no: 32015 }]);
  // console.log(first[0].nama, "42 42 42 42 42 ");
  // console.log(firstData, "firstData 61");
  // const router = useRouter();
  // const ss = router.query;
  const [dataEdit, setDataEdit] = useState({
    nama: "",
    nim: "",
    orangtua: "",
    kelas: "",
  });

  const edit = (e) => {
    setDataEdit({ ...dataEdit, [e.target.name]: e.target.value });
    console.log(e.target.value, "e.target.value");
  };
  const saveEdit = (e) => {
    e.preventDefault();
    // console.log("saveEdit");
    // console.log(firstData, "edit first data");
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
                    Nama Murid
                  </label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={edit}
                    type="text"
                    defaultValue={firstData.nama}
                    name="nama"
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
                    defaultValue={firstData.nim}
                    name="nim"
                    min="30001"
                    max="39099"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                    defaultValue={firstData.orangtua}
                    id="orangtua"
                    name="orangtua"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                    defaultValue={firstData.kelas}
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
