import React, { Component } from "react";
import logo from "./logo.png";
import developer from "./developer.svg";
import "./Auth.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Auth() {
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
          <Input title="Email" icon="fa fa-user" />
          <Input title="Password" icon="fa fa-lock" />
          <Button title="Login" />
          <Button title="Signup" />
        </div>
      </div>
    </div>
  );
}
