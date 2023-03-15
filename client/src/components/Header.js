import React, { Component } from "react";
import logo from "../Images/pokemon-logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

class Header extends Component {
  state = { clicked: false };

  render() {
    return (
      <>
        <div id="main-header" container>
          <Link to="/">
          <img id="main-logo" src={logo} alt="logo" />
          </Link>
          <i className="fab fa-react"></i>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <nav id="main-nav">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/OurPokemons">OUR POKEMONS</NavLink>
            <NavLink to="/pokemons/new">ADD POKEMON</NavLink>
            <NavLink to="/Pokemons/api/pokemons">PUBLIC POKEMONS</NavLink>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
