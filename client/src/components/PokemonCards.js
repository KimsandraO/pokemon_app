import React from "react";
import { Link }  from "react-router-dom";

function PokemonCards({name, abilities, weakness, image, id}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="pokemon-card lightgray-bg p-0 m-1">
        <div className="header-card blue-bg p-1">
          <h2 className="text-white">{name}</h2>

        </div>
        <div className="body-card">

          <img src={image} alt={name} className="img-fluid thumbnail" />

          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4>Abilities</h4>
                <p>{abilities}</p>

              </div>
              <div className="col-6">
                <h4>Weakness</h4>
                <p>{weakness}</p>
              </div>
            </div>
          </div>
        </div>
        <Link className="button-card yellow-bg" to={`/pokemons/${id}`}>
        View Details</Link>
      
      </div>
    </div>
    )
}

export default PokemonCards;
