import React from "react";
import "./App.css";
import Logo from "./jordan.png"

function App() {
  return (
    <div className="First">
      <Navbar />
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-up">
          <div className="navbar-up-left">
          <img src={Logo}/>
          </div>
          <div className="navbar-up-right">
            <div>Find a store</div>
            <div>Help</div>
            <div>Join us</div>
            <div className="nv-text">Sign in</div>
          </div>
        </div>
      <div className="navbar-down">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
