import React, { useState } from "react";
import Admin from "layouts/layoutAdmin";
function Administrator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = useState("");

  const [label, setLabel] = useState("");
  const [code, setCode] = useState("");

  const addAdmin = (e) => {
    e.preventDefault();
    const postData = async () => {
      //isi data
      const data = {
        label: label,
        code: code,
      };
      //kirim data
      const response = await fetch("/api/data-kelas/new-class-api", {
        method: "POST",
        body: JSON.stringify(data),
      });
      // console.log(response, data , "response");
      return response.json();
    };
    postData().then((data) => {
      //   console.log(data, "data.message");
    });
    e.target.reset();
  };

  
  return (
    <div>
      <Admin className="">
        <div className="flex flex-wrap mt-4 relative md:ml-32 px-8">
          <div className="w-full lg:w-6/12 border-2 border-blue-500 relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-neutral-100">
            <div className="p-4 w-full">
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Tambah Kelas
              </h6>
              <form onSubmit={addAdmin}>
                <section>
                  <div className="w-full lg:w-10/12 px-4 justify-center">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Kelas
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setLabel(e.target.value)}
                        type="text"
                        id="kelas"
                        name="kelas"
                        placeholder="Tambah Kelas"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-10/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        KODE
                      </label>
                      <input
                        onChange={(e) => setCode(e.target.value)}
                        type="text"
                        id="code"
                        name="code"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Kode Kelas"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </section>
                <button
                  type="submit"
                  className="bg-pink-600 text-white font-bold mt-5 py-2 px-4 rounded opacity-75"
                >
                  NEW CLASS
                </button>
              </form>
            </div>
          </div>
        </div>
      </Admin>
    </div>
  );
}

export default Administrator;
