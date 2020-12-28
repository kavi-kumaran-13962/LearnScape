import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import LoginOutline from "../LoginOutline/LoginOutline";
function StudentLogin() {
  return (
    <div>
      <Input
        title="Classcode"
        icon="fa fa-university"
        placeholder="Class Code"
      />
      <Input title="rollno" icon="fa fa-user" placeholder="Roll No" />
      <Input title="Password" icon="fa fa-lock" />
      <Button title="Login" />
    </div>
  );
}

export default LoginOutline(StudentLogin);
