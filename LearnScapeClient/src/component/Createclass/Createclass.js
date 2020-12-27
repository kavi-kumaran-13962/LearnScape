import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Createclass.scss";
export default function createClass() {
  return (
    <div className="createcls">
      <p className="cClass">Create Classroom</p>
      <div className="progress">
        <div className="steps">
          <div className="num">
            <span>1</span>
          </div>
          <div className="check fas fa-check" />
        </div>
        <div className="steps">
          <div className="num">
            <span>2</span>
          </div>
          <div className="check fas fa-check" />
        </div>
        <div className="steps">
          <div className="num">
            <span>3</span>
          </div>
          <div className="check fas fa-check" />
        </div>
      </div>
      <div>
        <form>
          <div className="slide">
            <Input
              title="ccName"
              placeholder="Class Coordinator Name"
              icon="fa fa-user"
            />
            <Input
              title="ccEmail"
              placeholder="Class Coordinator Email"
              icon="fa fa-envelope"
            />
            <Input
              type="password"
              title="password"
              placeholder="Password"
              icon="fa fa-lock"
            />
            <Input
              type="password"
              title="password"
              placeholder="Confirm Password"
              icon="fa fa-lock"
            />
            <div>
              <Button title="next" text="Next" />
            </div>
          </div>
          <div className="slide">
            <Input
              title="crName"
              placeholder="Classroom Name"
              icon="fa fa-university"
            />
            <Input
              title="students"
              type="Number"
              placeholder="No.of.Students"
              icon="fa fa-user"
            />
            <Input
              title="subject"
              type="Number"
              placeholder="No.of.Subjects"
              icon="fa fa-book"
            />
            <div>
              <Button title="previous" text="Previous" />
              <Button title="next" text="Next" />
            </div>
          </div>
          <div className="slide"></div>
        </form>
      </div>
    </div>
  );
}
