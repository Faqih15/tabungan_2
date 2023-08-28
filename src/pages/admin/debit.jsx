import CardDebit from "@components/CardsAdmin/CardDebit";
import Admin from "layouts/layoutAdmin.jsx";

export function EditSantri() {
  return (
    <>
      <Admin>
        {/* <div className="text-2xl font-bold">NAMA : {id}</div> */}
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <b>HALAMAN DEBIT HANYA BISA DIAKSES OLEH ADMIN</b>
            <CardDebit />
          </div>
        </div>
      </Admin>
    </>
  );
}
export default EditSantri;
