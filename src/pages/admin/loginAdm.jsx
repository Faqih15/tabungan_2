import React, { useRef, useState } from "react";
// layout for page
import Auth from "layouts/layoutAuth.jsx";

export default function Login(props) {
  const setlogin = props.setlogin;
  const [statusLogin, setstatusLogin] = useState({
    isLogin: true,
  });

  const cekLogin = (e) => {
    e.preventDefault();
    const emailuser = e.target.emailoruser.value;
    const password = e.target.password.value;
    if (
      emailuser === "mujahidfaqihuddin@gmail.com" &&
      password === "gaskencoy"
    ) {
      setlogin(true);
    } else {
      console.log("user/pass salah");
    }
  };

  return (
    <>
      <div>
        <Auth>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Sign in with credentials</small>
                    </div>
                    <form onSubmit={cekLogin}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email / Username
                        </label>
                        <input
                          autoComplete="off"
                          type="text"
                          id="emailoruser"
                          name="emailoruser"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email / Username"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          autoComplete="off"
                          type="password"
                          id="password"
                          name="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                        />
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            autoComplete="off"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                          // onClick={cekLogin}
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
                </div>
              </div>
            </div>
          </div>
        </Auth>
      </div>
    </>
  );
}
