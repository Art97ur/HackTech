import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Auth from "../components/auth/auth";

import { onSignOut } from "../store/authentication/actions";

import { FormComponent } from "../formComponent";
import "./styles.css";
import { Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router";

export const Project = () => {
  const [close, setClose] = useState(false);
  const onClose = () => setClose(!close);
  const data = useSelector((state) => state.objectives.objectives.results);
  const dispatch = useDispatch();
 console.log(data);
const navigate = useNavigate()
  return (
    <div className="project">
      {/* <Auth /> */}
      <Button className="btn" onClick={() => {
        dispatch(onSignOut())
        navigate("/")
      }}>
        Log Out
      </Button>
      <i onClick={() => onClose(close)} className="bx bxs-arrow-from-right"></i>
        <p>alignee_test@mailinator.com <br /> AdminUser2022</p>
      <div className="s1">
        {data?.map((el, i) => {
          return (
            <div key={i}>
              <p>NAME:{el.name}</p>
            </div>
          );
        })}
      </div>
      {close && (
        <div className="s2">
          <div>
            <i
              onClick={() => onClose(close)}
              className="bx bxs-arrow-from-left"
            ></i>
            <FormComponent />
          </div>
        </div>
      )}
    </div>
  );
};
