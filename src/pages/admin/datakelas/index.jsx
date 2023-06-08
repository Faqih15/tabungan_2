import React from "react";
import Admin from "layouts/layoutAdmin.jsx";
import TabelKelas from "@components/CardKelas/CardTableKelas";
// import TabelKelas from "components/Cardkelas/CardTableKelas";
// import TabelKelas from "../../../../components/CardKelas"

export default function Home() {
  return (
    <div className="">
      <>
        <Admin>
          {/* size kotak tabel */}
          <div className="flex flex-wrap mt-4 relative md:ml-5 md:mr-10">
            <div className="w-full mb-12 ">
              <TabelKelas />
            </div>
          </div>
        </Admin>
      </>
    </div>
  );
}
