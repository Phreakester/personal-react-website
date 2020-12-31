import React, { Component } from 'react';
import "./App.css"

export default class Continue extends Component {
    render() {
        return(
            <div className="Continue-Container">
                <button href="https://google.com" className="Continue-Card Continue-About-Me">
                    About Me
                </button>
                <button className="Continue-Card Continue-Projects">
                    Projects
                </button>
                <button className="Continue-Card Continue-Resume">
                    Resume
                </button>
            </div>
        )
    }
}