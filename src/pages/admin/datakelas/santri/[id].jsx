import React, { useEffect, useState } from "react";
import Admin from "layouts/layoutAdmin.jsx";
import SantriPerKelas from "@components/CardKelas/SantriPerKelas";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id, "id from query");
  const [first, setFirst] = useState([]);
  useEffect(() => {
    setFirst(id);
  }, [id]);
  // console.log(id, "id di [id].jsx santri");
  // console.log(first, "first di [id].jsx santri");

  return (
    <div className="">
      <>
        <Admin>
          {/* size kotak tabel */}
          <div className="flex flex-wrap mt-4 relative md:ml-5 md:mr-10">
            <div className="w-full mb-12 ">
              DAFTAR SANTRI PER KELAS {id}
              <SantriPerKelas spk={id} />
            </div>
          </div>
        </Admin>
      </>
    </div>
  );
}
