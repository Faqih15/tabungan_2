import React, { useEffect, useState } from "react";

export default function CardEditKelas({ id }) {
  const [firstData, setFirstData] = useState("");
  const [lastData, setlastData] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/data-kelas/getid/${id}`);
        const data = await response.json();
        setFirstData(data);
        setlastData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);
  // console.log(firstData);
  const edit = (e) => {
    setFirstData({ ...firstData, [e.target.name]: e.target.value });
  };
  const saveEdit = (e, idx) => {
    e.preventDefault();
    const save = async () => {
      const datasave = firstData;
      const response = await fetch("/api/data-kelas/update/up", {
        method: "PUT",
        body: JSON.stringify({
          userId: idx,
          lastData: lastData,
          newData: datasave,
        }),
        headers: firstData,
      });
      // response();
    };
    save().then(() => {
      console.log("parameter e save");
    });
    e.target.reset();
  };
  const backtosantri = () => {
    window.location.href = "/admin/datakelas";
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2 bg-neutral-100">
        <section className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e) => saveEdit(e, id)}>
            <h6 className="text-black text-sm mt-8 mb-10 font-bold uppercase">
              Edit Kelas
              <br />
              <span>Last Value: {firstData.value}</span>
              <br />
              <span>Last Code: {firstData.code}</span>
            </h6>
            <div className="">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    KELAS
                  </label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={edit}
                    type="text"
                    defaultValue={firstData.value}
                    name="value"
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
                    KODE
                  </label>
                  <input
                    onChange={edit}
                    type="text"
                    defaultValue={firstData.code}
                    name="code"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75 uppercase"
              onClick={backtosantri}
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
