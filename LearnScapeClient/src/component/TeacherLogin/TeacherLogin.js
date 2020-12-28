import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import LoginOutline from "../LoginOutline/LoginOutline";
import "./TeacherLogin.scss";
function TeacherLogin() {
  return (
    <div>
      <Input
        title="Classcode"
        icon="fa fa-university"
        placeholder="Class Code"
      />
      <Input title="subjectCode" icon="fa fa-user" placeholder="Subject Code" />
      <Input title="Password" icon="fa fa-lock" />
      <Button title="Login" />
    </div>
  );
}

export default LoginOutline(TeacherLogin);
