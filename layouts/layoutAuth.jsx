import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar";
import FooterSmall from "components/Footers/FooterSmall";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Auth({ children, data }) {
  // console.log(data, "data props dari transaction.js");
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          {/* <SantriBuy /> */}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
