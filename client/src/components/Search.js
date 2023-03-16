import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.length !== 0) {
      navigate(`/OurPokemons/${searchTerm}`);
      document.getElementById("search-form").reset();
    }
  };

  return (
    <div className="blue-bg">
      <div className="search-bar container">
        <div className="search-start">
          <h3 className="text-white">Find a Pokemón</h3>
          <form onSubmit={handleSearch} id="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Find a Pokemon"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={handleInput}
              />
              <button
                className="btn btn-warning rounded-pill"
                type="submit"
                id="button-addon2"
              >
                <span className="material-symbols-sharp">search</span>
                Button
              </button>
            </div>
          </form>
        </div>
        <div className="search-end">
          <button className="btn btn-warning rounded-pill m-3">
            <span className="material-symbols-sharp">sort</span> Sort Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
