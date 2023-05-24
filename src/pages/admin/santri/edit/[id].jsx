import CardEditSantri from "@components/Cards/CardEditSantri";
import Admin from "layouts/layoutAdmin.jsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function EditSantri() {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id, "id from query");
  const [first, setFirst] = useState([])
  useEffect(() => {
    setFirst(id);
  }, [id]);
  // console.log(first, "first 14");

  return (
    <>
      <Admin>
        {/* <div className="text-2xl font-bold">NAMA : {id}</div> */}
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <CardEditSantri id={id} />
          </div>
        </div>
      </Admin>
    </>
  );
}
export default EditSantri;
