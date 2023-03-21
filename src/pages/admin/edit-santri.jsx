import CardEditSantri from "@components/Cards/CardEditSantri";
import Admin from "layouts/layoutAdmin.jsx";
import { useRouter } from "next/router";

function EditSantri() {
  const router = useRouter();
  const santriPerID = router.query;
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <CardEditSantri santriPerID={santriPerID}/>
          </div>
        </div>
      </Admin>
    </>
  );
}
export default EditSantri;