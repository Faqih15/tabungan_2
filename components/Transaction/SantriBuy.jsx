import Link from "next/link";
import React, { useState } from "react";

function SantriBuy() {
  const [hasilinput, sethasilinput] = useState({
    nama: "",
    nim: "",
    transaksi: "",
    pin: "",
  });

  const onchange = (e) => {
    sethasilinput({ ...hasilinput, [e.target.name]: e.target.value });
    console.log(e.target.value, "e.target.value");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(hasilinput, "hasilinput");
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Transaksi Santri
                </h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form onSubmit={onsubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    User
                  </label>
                  <input
                    onChange={onchange}
                    type="text"
                    id="nama"
                    name="nama"
                    autoComplete="off"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    NIM
                  </label>
                  <input
                    onChange={onchange}
                    type="number"
                    id="nim"
                    name="nim"
                    min="30001"
                    max="35999"
                    autoComplete="off"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="NIM"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nilai Transaksi
                  </label>
                  <input
                    onChange={onchange}
                    type="number"
                    id="transaksi"
                    name="transaksi"
                    min="100"
                    max="30000"
                    autoComplete="off"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Uang"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    PIN
                  </label>
                  <input
                    onChange={onchange}
                    type="password"
                    id="pin"
                    name="pin"
                    autoComplete="off"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer ">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      autoComplete="off"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-xxsm font-semibold text-blueGray-600 hover:text-red-600">
                      Transaksi tidak dapat dibatalkan kecuali dengan perjanjian
                      tertentu
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200"
              >
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link
                href="/auth/register"
                // href="#pablo"
                className="text-blueGray-200"
              >
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SantriBuy;
