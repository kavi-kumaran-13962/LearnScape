import React from "react";
import { Route, Switch } from "react-router-dom";
import Cclogin from "./component/CcLogin/Cclogin";
import StudentLogin from "./component/StudentLogin/StudentLogin";
import TeacherLogin from "./component/TeacherLogin/TeacherLogin";
import "./styles/utility.scss";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TeacherLogin} />
        <Route path="/cc" component={Cclogin} />
        <Route path="/student" component={StudentLogin} />
      </Switch>
    </div>
  );
}
