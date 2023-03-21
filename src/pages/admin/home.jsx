import React from "react";
import CardTable from "components/Cards/CardTable";
import Admin from "layouts/layoutAdmin.jsx";

export default function Home() {
  return (
   <div className="">
      <>
        <Admin >
        <div className="flex flex-wrap mt-4 relative md:ml-32 md:mr-10">
          <div className="w-full mb-12 ">
            <CardTable />
          </div>
        </div>
        </Admin>
      </>
    </div>
  );
}
