// import axios from "axios";
// import { AuthToken, BACKEND_URL } from "../const";
// import store from "../redux/store";

import axios from "axios";

// export const instance = axios.create({
//     baseURL: BACKEND_URL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });


//   instance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async (err) => {
//       const originalConfig = err.config;
//       if (err.response) {
//         if (err.response.status === 401 && !originalConfig._retry) {
//           originalConfig._retry = true;
//           try {
//             const {
//               data: { access },
//             } = await instance.post(
//               `${BACKEND_URL}`,
//               {
//                 refresh: refreshToken,
//               }
//             );
//             localStorage.setItem("access_token", access);
//             return instance(originalConfig);
//           } catch (_error) {
//             store.dispatch(push(`/login`));
//             localStorage.removeItem("access_token");
//             localStorage.removeItem("refresh_token");
//             console.log("_error", _error.response);
//             store.dispatch(setLoginFailure(_error.response.status));
//             return Promise.reject("");
//           }
//         }
//       }
//       return Promise.reject(err);
//     }
//   );



