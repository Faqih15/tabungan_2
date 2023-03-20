import React, { useState } from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/layoutAuth";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Transaction(ayam ) {
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

