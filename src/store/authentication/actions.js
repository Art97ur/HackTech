
import { instance, REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS } from '../../auth';
import { setLoginSuccess } from './authSlice';


export const login = (email, password) => {
  return instance.post(
    `${REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS}login/`,
    {
      email,
      password,
    }
  );
};

export const loginAction = (payload) => {
  console.log('payload', payload)
  return async (dispatch) => {
    try {
      const response = await login(payload.email, payload.password);
      console.log('response', response)
      const {
        data: { access, refresh },
      } = response;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      dispatch(setLoginSuccess(true));
    } catch (e) {
      console.log(e);
    }
  };
};


export const onSignOut = () => (dispatch) =>  {
  console.log(
    'localStorage.getItem("access_token")',
    localStorage.getItem("access_token")
  );
  fetch(`${REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS}logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: { refresh: localStorage.getItem("refresh_token") },
  })
    .then((res) => res.json())
    .then(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    });
};