import React, { FC, useEffect, useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Header: FC = () => {
  const [userDataToken, setUserData] = useState<string>("");
  console.log("userDataToken: ", userDataToken);
  const userEmail: string | null = useSelector(
    (state: any) => state.auth.setUserProfileEmail
  );
  const localToken: string | null = localStorage.getItem("authToken");
  console.log("localToken: ", localToken);
  const getCurrentUser = async (token: string | null) => {
    if (token !== null) {
      const userData: any = await axios.post(
        `http://localhost:3000/api/auth/current`,
        {
          token,
        }
      );
      setUserData(userData.data.data.email);
    }
    return;
  };

  const userLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getCurrentUser(localToken);
  }, []);

  return (
    <header className="header">
      <div className="parent-container">
        <div className="nav-container">
          <NavLink className={"nav-items"} to={"/home"}>
            Shop
          </NavLink>
          <NavLink className={"nav-items"} to={"/card"}>
            Card
          </NavLink>
        </div>
        <div className="user-menu-container">
          {userEmail && userDataToken !== null ? (
            <h2 className={"nav-items"}>{userEmail}</h2>
          ) : (
            <NavLink to={"/"} className={"nav-items"}>
              Sign in / Sign up
            </NavLink>
          )}
        </div>
        {localToken !== null ? (
          <h2 onClick={userLogout} style={{ color: "white" }}>
            Log out
          </h2>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
