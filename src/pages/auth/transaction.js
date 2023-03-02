import React from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Login() {
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
