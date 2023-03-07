import React, { useEffect } from "react";
import { createUser } from "lib/user";

function tambahAdmin() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await createUser();
    };
    fetchData();
  });

  return <div>tambahAdmin</div>;
}

export default tambahAdmin;
