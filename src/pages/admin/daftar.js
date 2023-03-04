import React, { useEffect } from "react";
import { useRouter } from "next/router";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

function Settings() {
  return (
    <>
      <Admin />
      <div className="flex flex-wrap mt-4 relative md:ml-64 px-8">
        <div className="w-full lg:w-8/12">
          <CardSettings />
          {/* bg-orange-400 */}
        </div>
      </div>
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
