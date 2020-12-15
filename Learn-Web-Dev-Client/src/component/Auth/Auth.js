import React, { Component } from "react";
import logo from "./logo.png";
import developer from "./developer.svg";
import Input from "../Input/Input"
import Button from "../Button/Button"
import "./Auth.scss";
export default class Auth extends Component {
  
  constructor() {
    super();
    this.state= {
      style:{
          height: '2rem',
          width: '19rem',
          title:["email","password","Login", "SignUp"],
          boxShadow :"0px 3px 7px #2983c4",
          icon:["fa fa-user-o","fa fa-lock"]
        }
      }
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
            <Input  height = {this.state.style.height} 
                    width = {this.state.style.width}
                    title = {this.state.style.title[0]}
                    boxShadow = {this.state.style.boxShadow}
                    icon = {this.state.style.icon[0]}/>
            <Input  height = {this.state.style.height} 
                    width = {this.state.style.width}
                    title = {this.state.style.title[1]}
                    boxShadow = {this.state.style.boxShadow}
                    icon = {this.state.style.icon[1]}/>
            <Button title ={this.state.style.title[2]}/>     
            <Button title ={this.state.style.title[3]}/>   
          </div>
        </div>
      </div>
    );
  }
}
