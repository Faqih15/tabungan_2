import { useRouter } from "next/router";
import React, { useState } from "react";
import Home from "./home";
import Login from "./loginAdm";

// function index() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

export default function index({ children }) {
  const router = useRouter();
  const [datalogin, setdatalogin] = useState(false);
  console.log(datalogin);
  // setdatalogin(!datalogin);
  if (datalogin === false) {
    return (
      <>
        <Login />
        {/* <Home /> */}
      </>
    );
    console.log("if");
  } else if (datalogin === true) {
    <>
      <Home />
    </>;
    console.log("else if");
  } else {
    console.log("else");
  }
}

// import { useRouter } from "next/router";
// import React from "react";

// export default function ProtectedRoute({ children }) {
//   const router = useRouter();
//   const session = false

//   if (session === true)) {
//     return <>{children}</>;
//   }
//   router.push("/");
// }
