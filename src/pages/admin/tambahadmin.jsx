import React, { useEffect, useState } from "react";
import { createUser } from "lib/user";

function tambahAdmin() {
  console.log("client console");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(e.target.value, "e.target.value");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getServerSideProps({ email: value.email }, { password: value.password });
  };
  console.log(value, "value after input");
  return (
    <div>
      tambahAdmin
      <form onSubmit={onSubmit}>
        <section>
          <label>email</label>
          <input type="text" name="email" onChange={onChange}></input>
        </section>
        <section>
          <label>password</label>
          <input type="password" name="password" onChange={onChange}></input>
        </section>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const value = context.req.body;
  const email = context.req.body.email;
  const password = context.req.body.password;

  const user = await createUser({ email: email }, { password: password });
  console.log(value, "server console");

  // Pass data to the page via props
  return { props: { user } };
}

export default tambahAdmin;

// Fetch data from external API
// const res = await fetch(`https://.../data`)
// const data = await res.json()
// const data = {};

// useEffect(() => {
//   const fetchData = async () => {
//     const data = await createUser();
//   };
//   fetchData();
// });
// console.log(data);
