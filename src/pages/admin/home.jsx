import React from "react";

// import CardSettings from "components/Cards/CardSettings.js";

import CardTable from "components/Cards/CardTable";
import Admin from "layouts/layoutAdmin.jsx";

export default function Home() {
  return (
    <div className="">
      <>
        <Admin >
        <div className="flex flex-wrap mt-4 relative md:ml-64 px-8">
          <div className="w-full mb-12 ">
            <CardTable />
          </div>
          <div className="w-full mb-12 bg-slate-900">
            <CardTable color="dark" />
          </div>
        </div>
        </Admin>
      </>
    </div>
  );
}
