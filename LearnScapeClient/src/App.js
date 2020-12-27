import React from "react";
import { Route } from "react-router-dom";
import "./styles/utility.scss";
import StudentLogin from "./component/Login/Student/Student";
import TeacherLogin from "./component/Login/Teacher/Teacher";
import CcLogin from "./component/Login/Cc/Cc";
<<<<<<< HEAD
import Verification from "./component/Verification/Verification";
import Activation from "./component/Activation/Activation";
import createClass from "./component/Createclass/Createclass";
=======
>>>>>>> 825bbeabc9aabb4b1e1dac9ff33b2a7476fba50d
export default function App() {
  return (
    <div>
      <switch>
<<<<<<< HEAD
        <Route path="/" component={createClass} />
=======
        <Route path="/" component={CcLogin} />
>>>>>>> 825bbeabc9aabb4b1e1dac9ff33b2a7476fba50d
        {/* <Route path="/teacher" component={TeacherLogin} /> */}
      </switch>
    </div>
  );
}
