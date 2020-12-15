import React, { Component } from 'react'

export default class Button extends Component {
    render(props) {
        return (
            <div>
                <button className = "btn"
                style = {{
                    marginTop:"1rem"
                }
                }>
                    <span className = "btn-text">{this.props.title}</span>
                </button>
            </div>
        )
    }
}



