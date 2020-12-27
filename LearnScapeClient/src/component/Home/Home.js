import React from "react";
import "./Home.scss";
import logo from "../../component/Login/logo.png";

function optionSelected(e) {
  const pointer = document.getElementsByClassName("pointer");
  console.log(pointer.style.color);
}
export default function Home() {
  return (
    <div>
      <div className="pointer"></div>
      <div className="sidenav">
        <div className="logo">
          <img src={logo} />
          <h4 className="logo-txt">Learn Scape</h4>
        </div>
        <div className="navdiv" title="one" onClick={optionSelected}>
          <i className="fa fa-user-o"></i>
          <a href="#" className="navlink">
            Profile
          </a>
        </div>
        <div className="navdiv" title="two" onClick={optionSelected}>
          <i className="fa fa-desktop"></i>
          <a href="#" className="navlink">
            Time table
          </a>
        </div>
        <div className="navdiv" title="three" onClick={optionSelected}>
          <i className="fa fa-comment"></i>
          <a href="#" className="navlink">
            Chats
          </a>
        </div>
        <div className="navdiv" title="four" onClick={optionSelected}>
          <i className="fa fa-pencil"></i>
          <a href="#" className="navlink">
            Notes
          </a>
        </div>
        <div className="navdiv" title="five" onClick={optionSelected}>
          <i className="fa fa-desktop"></i>
          <a href="#" className="navlink">
            Desk
          </a>
        </div>
        <div className="navdiv" title="six" onClick={optionSelected}>
          <i className="fa fa-graduation-cap"></i>
          <a href="#" className="navlink">
            Result
          </a>
        </div>
      </div>
    </div>
  );
}
