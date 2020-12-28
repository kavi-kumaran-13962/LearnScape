import React from "react";
import "./LoginOutline.scss";
import developer from "./developer.svg";
import logo from "./logo.png";
const Login = (OriginalComponent) => {
  function LoginOutline() {
    return (
      <div className="Auth">
        <div className="Auth__container">
          <div className="Auth__image">
            <img className="Auth__image--img" src={developer} alt="developer" />
          </div>
          <div className="Auth__form">
            <div className="Auth__form--logo">
              <div className="Auth__form__image">
                <img className="Auth__form--img" src={logo} alt="logo" />
              </div>
              <div className="Auth__form--logoText">
                <h3 className="Auth__form--logotxt">Learn Web Dev</h3>
              </div>
            </div>
            <OriginalComponent />
          </div>
        </div>
      </div>
    );
  }

  return LoginOutline;
};

export default Login;
