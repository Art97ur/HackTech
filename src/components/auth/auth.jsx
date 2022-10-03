// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginAction } from "../../store/authentication/actions";

// export const Auth = () => {
//   const dispatch = useDispatch();
//   const [authCredentials, setAuthCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   console.log("authCredentials", authCredentials);
//   return (
//     <div>
//       <input
//         placeholder="email"
//         onChange={(e) => {
//           setAuthCredentials({ ...authCredentials, email: e.target.value });
//         }}
//       />
//       <input
//         placeholder="password"
//         onChange={(e) =>
//           setAuthCredentials({ ...authCredentials, password: e.target.value })
//         }
//       />

//       <button onClick={() => dispatch(loginAction(authCredentials))}>
//         login
//       </button>
//     </div>
//   );
// };

// export default Auth;
