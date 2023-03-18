import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, navigate, useNavigate, Link } from "react-router-dom";

function PokemonApiDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  //console.log(pokemon);
  return (
    pokemon && (
      <>
        <div className="container" key={pokemon?.id}>
          <div className="pokemon-card col-12 lightgray-bg p-0 mt-3 mb-5">
            <div className="header-card blue-bg p-1">
              <h2 className="text-white">{pokemon?.name}</h2>
            </div>
            <div className="body-card">
              <div className="container">
                <div className="row">
                  <div className="col-6 lightgray-bg">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                      alt={pokemon?.name}
                      className="img-fluid p-5"
                    />
                    <p>{pokemon?.description}</p>
                  </div>
                  <div className="col-6 yellow-bg p-5">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h4>HEIGHT</h4>
                        <p className="text-start">
                          <span>{pokemon?.height}</span>
                        </p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <h4>WEIGHT</h4>
                        <p className="text-start">
                          <span>{pokemon?.weight}</span>
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h4>Abilities</h4>
                          {pokemon.abilities.map((poke, index) => {
                            return (
                              <>
                                <p className="text-start" key={index}>
                                  <span>{poke.ability.name}</span>
                                </p>
                              </>
                            );
                          })}
                        </div>
                        <div className="col-12 col-lg-6">
                          <h4>Weakness</h4>
                          {pokemon.stats.map((poke, index) => {
                            return (
                              <>
                                <p className="text-start" key={index}>
                                  <span>
                                    {poke.stat.name}:{poke.base_stat}
                                  </span>
                                </p>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>

                    <div className="row type-wrapper">
                      <div className="col-6 text-center">
                        <h4>Type</h4>
                        <div className="text-center type-pokemon">
                          {pokemon.types?.map((e, index) => {
                            return (
                              <>
                                <p className="text-start" key={index}>
                                  <span>{e.type.name}</span>
                                </p>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <Link
                        to="/pokemons/api/pokemons"
                        className="btn btn-secondary rounded-pill m-4 mt-5"
                        type="button"
                      >
                        <span class="material-symbols-sharp">arrow_back</span>
                        Go back to Pokemons List
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row bottom-details blue-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default PokemonApiDetails;
