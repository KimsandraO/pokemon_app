import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, navigate, useNavigate } from "react-router-dom";
import PokemonApiDetails from "./PokemonApiDetails";
function PokemonsApiCards({ pokemons, loading }) {
  //console.log(pokemon);
  const { _id } = useParams();
  const navigate = useNavigate();
  // const [pokemons, setPokemons] = useState([]);

  // console.log("hhhh", pokemons);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons?.map((item) => {
          return (
            <>
              <div className="col-12 col-lg-4 col-xl-3 mb-4" key={item._id}>
                <div className="pokemon-card lightgray-bg p-0 m-1">
                  <div className="header-card blue-bg p-1">
                    <h2 className="text-white">{item.name}</h2>
                  </div>

                  <Link
                    className="button-card yellow-bg"
                    to={`/api/extpokemons/${item._id}`}
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
