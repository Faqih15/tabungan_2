// import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import Home from "./home";
import Login from "./loginAdm";

export default function index({ children }) {
  // const router = useRouter();
  const [datalogin, setdatalogin] = useState(false);
  const setlogin = (arg) => {
    setdatalogin(arg);
  };

  // const firstdata = useMemo
  // useMemo(() => first, [second])
  // console.log(datalogin);
  // setdatalogin(!datalogin);
  if (datalogin === false) {
    return (
      <>
        <Login setlogin={setlogin} />
        {/* <Home /> */}
      </>
    );
    console.log("if");
  } else if (datalogin === true) {
    return (
      <>
        <Home />
      </>
    );
  } else {
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
