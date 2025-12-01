import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

export default function Bcrypt_Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState(
    localStorage.getItem("storedData") !== null
      ? JSON.parse(localStorage.getItem("storedData"))
      : []
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (users.length === 0) {
      alert("No users found, please register first");
      return;
    }

    // find user with same email
    const userMatch = users.find((obj) => obj.email === data.email);

    if (!userMatch) {
      alert("User not found");
      return;
    }

    // compare entered password with hashed saved password
    const passwordMatch = bcrypt.compareSync(
      data.password,
      userMatch.password
    );

    if (!passwordMatch) {
      alert("Wrong password");
      return;
    }

    // login success
    alert("Login Successful");
    navigate("/Bcrypt_Home");
  }

  return (
    <>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
        <br /><br />

        <p>
          <Link to="/">Don't have an account? Register</Link>
        </p>
      </form>
    </>
  );
}



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs";
// import Bcrypt_Home from "./Bcrypt_Home";

// const Bcrypt_Login = () => {
//     const navigate = useNavigate();

//     const [data, setData] = useState({
//         email: "",
//         password: "",
//     });
//     const [users, setUsers] = useState(
//         localStorage.getItem("storedData") !== null ? JSON.parse(localStorage.getItem("storedData")) : []
//     )
//     function handleChange(e) {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: value });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         if (users.length === 0) {
//             alert("no user found, please register first");
//         }
//         else {
//             const userMatch = users.find((obj) => obj.email === data.email);
//             console.log(userMatch)
//             const passwordMatch = bcrypt.compare(data.password, userMatch.password)

//             if (!userMatch) {
//                 alert("user not found")
//             }
//             else {
//                 if (!passwordMatch) {
//                     alert("wrong password")
//                 }
//                 else {
//                     navigate("/Bcrypt_Home")
//                 }
//             }
//             // users.map((obj) => {
//             //     if (obj.email === data.email) {
//             //         if (obj.password === data.password) {
//             //             navigate("/home");
//             //         } else {
//             //             alert("invalid password");
//             //         }
//             //     } else {
//             //         alert("user not found, please register");
//             //     }
//             // });
//         }
//     }


//     return (
//         <>
//             <h2>Login Page</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={data.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter Password"
//                     value={data.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <button type="submit">Login</button>
//                 <br /><br />

//                 <p>
//                     <Link to="/">Don't have an account? Register</Link>
//                 </p>
//             </form>
//         </>
//     );
// };

// export default Bcrypt_Login;