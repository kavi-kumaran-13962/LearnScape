import React, { Component } from "react";
import "./Input.scss";
export default function Input(props) {
  const className = `input input__${props.title}`;
  const icon = `${props.icon}`;
  return (
    <div>
      <i className={`input-icon ${icon}`}></i>
      <input className={className} placeholder={props.title}></input>
    </div>
  );
}

// class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.inputClick = this.inputClick.bind(this);
//     this.inputLeave = this.inputLeave.bind(this);
//     this.state = {
//       input: false,
//     };
//   }
//   inputClick(e) {
//     e.preventDefault();
//     this.setState({ [e.target.title]: true });
//   }
//   inputLeave(e) {
//     e.preventDefault();
//     this.setState({ [e.target.title]: false });
//   }
//   render() {
//     return (
//       <div>
//         <div
//           className={this.props.title}
//           title={this.props.title}
//           onMouseEnter={this.inputClick}
//           onMouseLeave={this.inputLeave}
//           style={{
//             boxShadow: `${this.props.boxShadow}`,
//             height: `${this.props.height}`,
//             width: `${this.props.width}`,
//           }}
//         >
//           <i class={this.props.icon}></i>

//           <input
//             autoComplete="off"
//             className="input__inp "
//             placeholder={this.props.title}
//             id={this.props.title}
//             type="text"
//             name={this.props.title}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default Input;
