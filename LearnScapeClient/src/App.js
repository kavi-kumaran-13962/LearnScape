import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/utility.scss";
import StudentLogin from "./component/Login/Student/Student";
import TeacherLogin from "./component/Login/Teacher/Teacher";
import CcLogin from "./component/Login/Cc/Cc";
import Home from "./component/Home/Home";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={StudentLogin} />
      </Switch>
    </div>
  );
}
export default App;
