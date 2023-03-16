import React from "react";

import { Link } from "react-router-dom";

function PokemonsApiCards({ pokemon, loading }) {
  //console.log(pokemon);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="col-12 col-lg-4 col-xl-3 mb-4" key={item.id}>
                <div className="pokemon-card lightgray-bg p-0 m-1">
                  <div className="header-card blue-bg p-1">
                    <h2 className="text-white">{item.name}</h2>
                  </div>
                  <div className="body-card">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                      alt={item.name}
                      className="img-fluid thumbnail"
                    />
                  </div>

                  <Link
                    className="button-card yellow-bg"
                    to={`/pokemons/publicPokemon/${item.id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default PokemonsApiCards;
