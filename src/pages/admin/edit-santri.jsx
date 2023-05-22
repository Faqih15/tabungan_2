import CardEditSantri from "@components/Cards/CardEditSantri";
// import { listIdSantri } from "@lib/santri/get-id-santri";
import Admin from "layouts/layoutAdmin.jsx";
import { useRouter } from "next/router";

// export async function getStaticPaths() {
//     // const paths = listIdSantri();
//     // console.log(paths, "paths");
//     const paths = ["1"]
//     console.log(paths, "paths");
//     return {
//       paths,
//       fallback: false,
//     };
//   }

// export async function getStaticProps({ params }) {
//     console.log(params, "params");
//     return {
//       props: {
//         id : "1"
//       },
//     };
//   }

export function EditSantri({ params }) {
//   console.log(params, "idsant");

  const router = useRouter();
  const { dataroute } = router.query;
  console.log(dataroute, " DATA ROUTE ");
  // const santriPerID = router.query;
  // console.log(santriPerID, "santriPerID");
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <div>
                User ID : {dataroute}
            </div>
            <CardEditSantri />

          </div>
        </div>
      </Admin>
    </>
  );
}
export default EditSantri;

// Index.getInitialProps = async ({ query }) => {
//   const {idsant} = query

//   return {idsant}
// }
