import { useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import {  NavLink, useNavigate,  } from "react-router-dom";
import "./styles.css"
import { useDispatch } from "react-redux";
import { loginAction } from "../store/authentication/actions";
import { maxLength25, minLength8, validateEmail } from "../const/validation";


export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({
    email: {
      value: "",
      error: undefined,
      validations: [validateEmail],
    },
    password: {
      value: "",
      error: undefined,
      validations: [minLength8, maxLength25],
    },
  });

  const onLoginSubmit = (e) => {
    e.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = loginData;

    const formData = {
      email:email.toLowerCase().trim(),
      password,
    };
   
    dispatch(loginAction(formData))
    navigate("/project")
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    const { validations } = loginData[name];
    let error;
    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;

        break;
      }
    }

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  return (
    <div className="wrapper-login">
      {/* <Alert className="alert" color="danger" >
      invalid email and/or password <span><i className='bx bxs-upside-down' style={{color:'#f21515'}}  ></i></span>
      </Alert> */}
      <div className="sign">
        <i className="bx bx-run bx-fade-left" style={{ color: "#64e631" }}></i>
        <h6>already have an account?</h6>
        <h3>Cool, just login.</h3>
        <Form className="form-login" onSubmit={onLoginSubmit} >
          <FormGroup>
            <Label for="emailId">Email</Label>
            <Input
              invalid={!!loginData.email.error}
              id="emailId"
              name="email"
              onChange={handleChange}
            />
            {!!loginData.email.error && (
              <FormFeedback>{loginData.email.error}</FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="passwordId">Password</Label>
            <Input
              invalid={!!loginData.password.error}
              id="passwordId"
              name="password"
              onChange={handleChange}
              type={"password"}
            />
            {!!loginData.password.error && (
              <FormFeedback>{loginData.password.error}</FormFeedback>
            )}
          </FormGroup>
          <Button
            color="success"
            disabled={
              loginData.password.value === "" ||
              loginData.email.value === "" ||
              !!loginData.password.error ||
              !!loginData.email.error
            }
          >
            Login
          </Button>
          {" "}
         
        </Form>
        <NavLink
        to={`/registration`}
      
      >
      </NavLink>
      </div>
    </div>
  );
};
