import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from "./Header.js";
import Intro from "./Intro.js";
import Continue from "./Continue.js";

function Button(props){
  return(
    <div>
      <button onClick={props.addFunc}>
        {props.text}
      </button>
    </div>
  )
}


function App() {
  return (
    <div>
    <Header />
    <Intro />
    <Continue />
    </div>
  );
}

export default App;
