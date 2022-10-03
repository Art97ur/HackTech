import axios from "axios";
// import { AuthToken } from "helpers/Storage";
// import { store } from "store/store";
// import { push } from "connected-react-router";
// import { setLoginFailure } from "store/authentication/authenticationSlice";

// const { REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS } = process.env;
export const REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS = "https://alignee.appspot.com/api/v1/accounts/"

export const instance = axios.create({
  baseURL: REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS,
  headers: {
    "Content-Type": "application/json",

  },
});

  console.log(instance.interceptors.request,"in");
instance.interceptors.request.use(
  (config) => {
    console.log(config,"config");
    const token = localStorage.getItem("refresh_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
        //   if (localStorage.getItem("refresh_token")) {
            const {
              data: { access },
            } = await instance.post(
              `${REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS}login/refresh/`,
              {
                refresh: localStorage.getItem("refresh_token"),
              }
            );
            localStorage.setItem("access_token", access);
            return instance(originalConfig);
        //   }
        } catch (_error) {
        //   store.dispatch(push(`/login`));
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          // console.log("_error", _error.response);
        //   store.dispatch(setLoginFailure(_error.response.status));
          return Promise.reject("");
        }
      }
    }
    return Promise.reject(err);
  }
);