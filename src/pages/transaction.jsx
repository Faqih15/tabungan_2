import React from "react";
import Auth from "layouts/layoutAuth";
import SantriBuy from "components/Transaction/SantriBuy";

export default function Transaction() {
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
