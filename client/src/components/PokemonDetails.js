import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function PokemonDetails() {

  const { pokemon_id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();


  console.log("whaaaaaaaaat")

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${pokemon_id}`)
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, [pokemon_id]);

  return ( 
    <div className="container" key={pokemon?._id}>
    <div className="pokemon-card col-12 lightgray-bg p-0 mt-3 mb-5">
      <div className="header-card blue-bg p-1">
        <h2 className="text-white">{pokemon?.name}</h2>

      </div>
      <div className="body-card">
        <div className="container">
          <div className="row">
            <div className="col-6 lightgray-bg">
            <img src={pokemon?.image} alt={pokemon?.name} className="img-fluid" />
            <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>

            </div>
            <div className="col-6 yellow-bg p-5">
              <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4>HEIGHT</h4>
                    <p className="text-start"><span>{pokemon?.height}</span></p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4>WEIGHT</h4>
                    <p className="text-start"><span>{pokemon?.weight}</span></p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4>Abilities</h4>
                    <p className="text-start">
                      {pokemon.abilities?.map((e)=> <span>{e}</span>)}
                    </p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4>Weakness</h4>
                    <p className="text-start">
                      {pokemon.weakness?.map((e)=> <span>{e}</span>)}
                    </p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4>Gender</h4>
                    <p className="text-start">
                    <span>{pokemon?.gender}</span>
                    </p>
                  </div>

              </div>
              <div className="row type-wrapper">

                  <div className="col-6 text-center">
                    <h4>Type</h4>
                    <div className="text-center type-pokemon">
                      {pokemon.type?.map((e)=> e ).join(", ")}
                    </div>
                  </div>
              </div>

            </div>
          </div>
          <div className="row bottom-details blue-bg"></div>
      </div> 
      </div>
    </div>

  </div>
  );   
}

export default PokemonDetails;
