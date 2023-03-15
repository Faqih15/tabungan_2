import React, { useEffect, useState } from "react";
import Admin from "layouts/layoutAdmin";
// import getServerSideProps from "admin/tambahadmin";

function TambahAdmin() {

  console.log("client console");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch("/api/create-user", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(response, "response");
      return response.json();
    };
    postData().then((data) => {
      console.log(data, "data.message");
    });
  };
  return (
    <div>
      <Admin className="">
        <div className="flex flex-wrap mt-4 relative md:ml-32 px-8">
          <div className="w-full lg:w-6/12 border-2 border-blue-500 relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-neutral-100">
            <div className="p-4 w-full">
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Tambah Admin
              </h6>
              <form onSubmit={onSubmit}>
                <section>
                  <div className="w-full lg:w-10/12 px-4 justify-center">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        id="nama"
                        name="email"
                        placeholder="Daftar email Admin"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-10/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="number"
                        id="password"
                        name="password"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password Admin"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </section>
                <button
                  type="submit"
                  className=" bg-pink-600 text-white font-bold py-2 px-4 rounded opacity-75 cursor-not-allowed"
                >
                  SUBMIT FORM
                </button>
                {/* <section>
          <label>email</label>
          <input type="text" name="email" onChange={onChange}></input>
        </section>
        <section>
          <label>password</label>
          <input type="password" name="password" onChange={onChange}></input>
        </section> */}
              </form>
            </div>
            {/* bg-orange-400 */}
          </div>
        </div>
      </Admin>
    </div>
  );
}


export default TambahAdmin;
