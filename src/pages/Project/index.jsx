import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent";
import { getObjectives } from "../../redux/slices/action";
import { logout } from "../../redux/slices/authSlice";

const Project = () => {
  const [close, setClose] = useState(false);
  const { objectives, hasBeenPosted } = useSelector(
    ({ objectives }) => objectives
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") || hasBeenPosted) {
      dispatch(getObjectives());
    }
  }, [dispatch, hasBeenPosted]);

  const resultData = useMemo(() => objectives || [], [objectives]);
  console.log(resultData);
  return (
    <div className="project">
      <header className="header">
        <i
          onClick={() => setClose((prevState) => !prevState)}
          className="bx bxs-arrow-from-right"
        ></i>
        <Button
          color="danger"
          className="btn"
          onClick={() => {
            dispatch(logout());
            Navigate("/");
          }}
        >
          Log Out
        </Button>
      </header>

      <div className="s1">
        {resultData.map(({ id, name }) => (
          <div key={id}>
            <p>
              {" "}
              <b>NAME:</b> {name}
            </p>
          </div>
        ))}
      </div>
      {close && (
        <div className="s2">
          <div>
            <i
              onClick={() => setClose((prevState) => !prevState)}
              className="bx bxs-arrow-from-left"
            ></i>
            <FormComponent setClose={setClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
