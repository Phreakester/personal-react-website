import React, { Component } from 'react';
import "./App.css"

export default class Header extends Component {
    render() {
        let gradients = [
            "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", 
            "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", 
            "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
            "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
            "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)"
          ];
          const gradient = gradients[Math.floor(Math.random() * gradients.length)];
          console.log(gradient);
          var css_body = document.querySelector("body");
          css_body.style.setProperty("--gradient", gradient)
          return (
            <div className="Header-Container">
              <div className="Header-Text" >
                <b>Getty George</b>
              </div>
            </div>
          );
    }
}