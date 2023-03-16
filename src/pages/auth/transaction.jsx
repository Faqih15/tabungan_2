import React, { useState } from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/layoutAuth";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Transaction(ayam ) {
  // const [dataLogin, setdataLogin] = useState(false);
  // console.log(ayam, "data ayam dari index.js");
  return (
    <>
      <div>
        <Auth data="data ayam woi">
          <SantriBuy data="data sapi cuy" />
        </Auth>
      </div>
    </>
  );
}

// Login.layout = Auth;
