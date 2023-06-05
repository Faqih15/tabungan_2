import React from "react";
import Admin from "layouts/layoutAdmin.jsx";
import CardTableAdmin from "@components/CardsAdmin/CardTableAdmin";

export default function Home() {
  return (
    <div className="">
      <>
        <Admin>
          {/* size kotak tabel */}
          <div className="flex flex-wrap mt-4 relative md:ml-5 md:mr-10">
            <div className="w-full mb-12 ">
              <CardTableAdmin />
            </div>
          </div>
        </Admin>
      </>
    </div>
  );
}
