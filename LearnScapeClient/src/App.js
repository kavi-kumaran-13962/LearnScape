import React from "react";
import { Route } from "react-router-dom";
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
      <switch>
        <Route path="/" component={createClass} />
        {/* <Route path="/teacher" component={TeacherLogin} /> */}
      </switch>
    </div>
  );
}
