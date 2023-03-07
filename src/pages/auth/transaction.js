import React, { useState } from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/layoutAuth.js";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Transaction() {
  const [dataLogin, setdataLogin] = useState(false);
  return (
    <>
      <div>
        <Auth>
          <SantriBuy />
        </Auth>
      </div>
    </>
  );
}

// Login.layout = Auth;
