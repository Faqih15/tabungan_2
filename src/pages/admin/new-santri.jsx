import React from "react";
// import { createSantriProfile } from "@lib/daftsantri";
// components

import CardSettings from "components/Cards/CardSettings.jsx";

// layout for page

import Admin from "layouts/layoutAdmin.jsx";

function Settings() {
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <CardSettings csp="{createSantriProfile}" />
            {/* bg-orange-400 */}
          </div>
        </div>
      </Admin>
    </>
  );
}
export default Settings;

// Settings.layout = Admin;

// const router = useRouter();

// useEffect(() => {
//   // Always do navigations after the first render
//   router.push("/admin/daftar", undefined, { shallow: true });
// }, []);

// useEffect(() => {
//   // The counter changed!
// }, [router.query.counter]);
//
// jurus terakhir kalo pindah page masih render

//TEMPLATE RELATIVE ABSOLUTE
{
  /* <div className="relative">
  <div className="absolute">
    <slot /> nuxt 3
    <nuxt /> nuxt 2
  </div>
</div>; */
}
// UNTUK LAYOUT BISA DIJELASKAN DI NEXT LAYOUT
