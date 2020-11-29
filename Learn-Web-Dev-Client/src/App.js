import React from "react";
import { Route } from "react-router-dom";
import Auth from "./component/Auth/Auth";
import "./styles/utility.css";
export default function App() {
  return (
    <div>
      <switch>
        <Route path="/" component={Auth} />
      </switch>
    </div>
  );
}
