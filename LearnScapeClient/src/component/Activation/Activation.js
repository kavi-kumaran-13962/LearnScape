import React from "react";
import "./Activation.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
export default function Activation() {
  return (
    <div className="activation">
      <p className="actAcc">Activate Account</p>
      <form>
        <Input title="Name" icon="fa fa-user" />
        <Input title="Email" icon="fa fa-envelope" />
        <Input title="Phno" placeholder="Phone Number" icon="fa fa-phone" />
        <Input
          title="password"
          placeholder="Password"
          type="password"
          icon="fa fa-lock"
        />
        <Input
          title="password"
          placeholder="Confirm Password"
          type="password"
          icon="fa fa-lock"
        />
        <Button title="activate" text="Activate" />
      </form>
    </div>
  );
}
