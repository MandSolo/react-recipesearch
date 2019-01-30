import React from "react";
import "../styling/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1> What's for dinner?</h1>
        <p> Search for recipes by ingredient...</p>
      </div>
    );
  }
}

export default Header;