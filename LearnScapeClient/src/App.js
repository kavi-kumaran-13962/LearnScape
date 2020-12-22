import React from "react";
import { Route } from "react-router-dom";
import "./styles/utility.scss";
import Auth from "./component/Auth/Auth";

export default function App() {
  return (
    <div>
      <switch>
        <Route path="/" component={Auth} />
      </switch>
    </div>
  );
}
