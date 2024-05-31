import React, {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/auth";
import axios, { AxiosResponse } from "axios";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token: any = useSelector((state: any) => state.auth);
  const [formEmail, setEmail] = useState("");
  const [formPass, setPass] = useState("");
  const navigate = useNavigate();
  interface authData {
    email: string;
    password: string;
  }

  const dispatch = useDispatch<any>();

  // const [userDataToken, setUserData] = useState<string>();
  // const getCurrentUser = async (token: string | null) => {
  //   if (token !== null) {
  //     const userData: any = await axios.post(
  //       `http://localhost:3000/api/auth/current`,
  //       {
  //         token,
  //       }
  //     );
  //     setUserData(userData.data.data.email);
  //   }
  //   return;
  // };
  // const localToken: string | null = localStorage.getItem("authToken");
  // useEffect(() => {
  //   getCurrentUser(localToken);
  // }, []);

  const authLogin = async () => {
    const data: authData = {
      email: formEmail,
      password: formPass,
    };
    const userData = await dispatch(loginUser(data));
    if (token.token.length !== 1) {
      localStorage.setItem("authToken", userData.payload.data.token);
      navigate("/home");
    }
  };

  const onFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={onFormHandler}>
        <h3>Login Here</h3>
        <label>Username</label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={formEmail}
          type="email"
          placeholder="Email or Phone"
          id="username"
        />
        <label>Password</label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPass(e.target.value)
          }
          value={formPass}
          type="password"
          placeholder="Password"
          id="password"
        />

        <button onClick={authLogin}>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
