import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/utility.scss";
import StudentLogin from "./component/Login/Student/Student";
import TeacherLogin from "./component/Login/Teacher/Teacher";
import CcLogin from "./component/Login/Cc/Cc";
import Verification from "./component/Verification/Verification";
import Activation from "./component/Activation/Activation";
import createClass from "./component/Createclass/Createclass";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Verification} />
        {/* <Route path="/" component={CcLogin} /> */}
        {/* <Route path="/" component={TeacherLogin} /> */}
      </Switch>
    </div>
  );
}
