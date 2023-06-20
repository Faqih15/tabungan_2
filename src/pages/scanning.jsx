import React from "react";
import Auth from "layouts/layoutAuth";
import ScanCard from "@components/Transaction/Scanning";

export default function Transaction() {
  return (
    <>
      <div>
        <Auth>
          <ScanCard />
        </Auth>
      </div>
    </>
  );
}
