import React, { useEffect, useState } from "react";

export default function CardEditAdmin({ id }) {
  const [firstData, setFirstData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/admin/getid/${id}`);
        const data = await response.json();
        setFirstData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);
  console.log(firstData, "firstData 52");

  const edit = (e) => {
    console.log(e.target.value, "e.target.value");
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2 bg-neutral-100">
        {/* <section className="rounded-t mb-0 px-6 py-6"></section> */}
        <section className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-black text-sm mt-8 mb-10 font-bold uppercase">
              Edit Admin
              <p>Parameter ID: {id}</p>
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={edit}
                    type="text"
                    defaultValue={firstData.email}
                    name="nama"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75 uppercase"
            >
              Save
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
