import React from "react";
import { Route } from "react-router-dom";
import "./styles/utility.scss";
import StudentLogin from "./component/Login/Student/Student";
import TeacherLogin from "./component/Login/Teacher/Teacher";
import CcLogin from "./component/Login/Cc/Cc";
import Home from "./component/Home/Home";
export default function App() {
  return (
    <div>
      <switch>
        <Route path="/" component={Home} />
        <Route path="/cc" component={CcLogin} />
        <Route path="/teacher" component={TeacherLogin} />
        <Route path="/student" component={StudentLogin} />
        <Route path="/" component={CcLogin} />
        {/* <Route path="/teacher" component={TeacherLogin} /> */}
      </switch>
    </div>
  );
}
