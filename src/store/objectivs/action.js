import axios from "axios";
import { instance, REACT_APP_BACKEND_API_URL_USERS_ORGANIZATIONS } from "../../auth";
import { AuthToken, BACKEND_URL } from "../../const";
import { setObjectives } from "./objectivsSlice";

export const getObjectivs = () => (dispatch) => {
  const token = localStorage.getItem("access_token")
    fetch(`${BACKEND_URL}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data,"setdata");
              dispatch(setObjectives(data))
              console.log(data,"dat");
            });


  };



  // export const getObjectivs =  () => {
  //   const res =  instance(`${BACKEND_URL}`)
  //   .then(res => console.log(res))
  //     return res
  // };

