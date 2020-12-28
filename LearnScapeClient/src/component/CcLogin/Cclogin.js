import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import LoginOutline from "../LoginOutline/LoginOutline";
import "./Cclogin.scss";
function Cclogin() {
  return (
    <div>
      <Input
        title="Classcode"
        icon="fa fa-university"
        placeholder="Class Code"
      />
      <Input title="Password" icon="fa fa-lock" />
      <Button title="Login" />
      <div className="or">
        <div className="divider"></div>
        <p className="or-txt">or</p>
        <div className="divider"></div>
      </div>
      <p className="noacc">Don't have an account ?</p>
      <Button title="signup" placeholder="SignUp"></Button>
    </div>
  );
}

export default LoginOutline(Cclogin);
