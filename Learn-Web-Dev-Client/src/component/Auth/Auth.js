import React, { Component } from "react";
import logo from "./logo.png";
import developer from "./developer.svg";
import "./Auth.css";
export default class Auth extends Component {
  constructor() {
    super();
    this.inputClick = this.inputClick.bind(this);
    this.inputLeave = this.inputLeave.bind(this);

    this.state = {
      email: false,
      pwd: false,
    };
  }

  inputClick(e) {
    e.preventDefault();
    this.setState({ [e.target.title]: true });
    e.target.children[2].focus();
    console.log(this.state.email);
    console.log(this.state.pwd);
  }
  inputLeave(e) {
    e.preventDefault();
    this.setState({ [e.target.title]: false });
  }
  render() {
    return (
      <div className="Auth">
        <div className="Auth__container">
          <div className="Auth__image">
            <img className="Auth__image--img" src={developer} alt="developer" />
          </div>
          <div className="Auth__form">
            <div className="Auth__form--logo">
              <div className="Auth__form__image">
                <img className="Auth__form--img" src={logo} alt="logo" />
              </div>
              <div className="Auth__form--logoText">
                <h3 className="Auth__form--logotxt">Learn Web Dev</h3>
              </div>
            </div>
            <div
              className="input inp-email"
              title="email"
              onMouseEnter={this.inputClick}
              onMouseLeave={this.inputLeave}
              style={{
                boxShadow: this.state.email
                  ? "0px 3px 7px #2983c4"
                  : "0px 3px 7px rgba(0, 0, 0, 0.393)",
              }}
            >
              <i class="fa fa-user-o"></i>
              <label className="label" for="email">
                Email
              </label>
              <input
                autoComplete="off"
                className="input__inp "
                id="email"
                type="text"
                name="email"
              />
            </div>
            <div
              className="input inp-pwd"
              title="pwd"
              onMouseEnter={this.inputClick}
              onMouseLeave={this.inputLeave}
              style={{
                boxShadow: this.state.pwd
                  ? "0px 3px 7px #2983c4"
                  : "0px 3px 7px rgba(0, 0, 0, 0.393)",
              }}
            >
              <i className="fa fa-lock"></i>
              <label className="label" for="pwd">
                Password
              </label>
              <input
                className="input__inp "
                autoComplete="off"
                id="pwd"
                name="email"
                type="text"
              />
            </div>
            <button className="btn ">
              <span className="btn-txt">Login</span>
              <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </button>
            <div className="or">
              <div className="divider"></div>
              <p>or</p>
              <div className="divider"></div>
            </div>
            <button className="btn ">
              <span className="btn-txt">Sign Up</span>
              <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
