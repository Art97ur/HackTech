import axios from "axios";
import { BACKEND_URL } from "../../constants";
import { postObjectives, setObjectives } from "./objectivesSlice";

export const getObjectives = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("access_token");

    const { data } = await axios.get(`${BACKEND_URL}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    dispatch(setObjectives(data.results));
  } catch (error) {
    console.log(error);
    return error;
  }
};

/*

 */

export const postObjective = (payload) => async (dispatch) => {
  const token = localStorage.getItem("access_token");

  try {
    await fetch(`${BACKEND_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    dispatch(postObjectives(true));
  } catch (error) {
    console.log(error);
  }
};
