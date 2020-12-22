import React from "react";
import { Route } from "react-router-dom";
import "./styles/utility.scss";
import StudentLogin from "./component/Login/Student/Student";
import TeacherLogin from "./component/Login/Teacher/Teacher";
import CcLogin from "./component/Login/Cc/Cc";
export default function App() {
  return (
    <div>
      <switch>
        <Route path="/" component={CcLogin} />
        {/* <Route path="/teacher" component={TeacherLogin} /> */}
      </switch>
    </div>
  );
}
