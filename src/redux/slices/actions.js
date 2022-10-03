import {
  instance,
  REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS,
} from "../../auth";
import { setLoginSuccess } from "./authSlice";

export const login = (email, password) => {
  return instance.post(
    `${REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS}login/`,
    {
      email,
      password,
    }
  );
};

export const loginAction = (payload) => async (dispatch) => {
  try {
    const {
      data: { access, refresh },
    } = await login(payload.email, payload.password);

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    dispatch(setLoginSuccess(true));
  } catch (e) {
    console.log(e);
  }
};
