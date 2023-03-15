import React, { Component } from "react";
import logo from "../Images/pokemon-logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

class Header extends Component {
  state = { clicked: false };

  render() {
    return (
      <>
        <div id="main-header" container>
          <img id="main-logo" src={logo} alt="logo" />
          <i className="fab fa-react"></i>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <nav id="main-nav">
            <Link to="/">HOME</Link>
            <Link to="/our pokemon">OUR POKEMONS</Link>
            <Link to="/add pokemon">ADD POKEMON</Link>
            <Link to="/public pokemon">PUBLIC POKEMONS</Link>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
