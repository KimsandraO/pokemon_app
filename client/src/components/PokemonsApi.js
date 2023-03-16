import React from "react";
import PokemonsApiCards from "./PokemonsApiCards";

import axios from "axios";
import { useEffect, useState } from "react";

function PokemonsApi() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, result.data];
        console.log(state);
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <PokemonsApiCards pokemon={pokemons} loading={loading} />
          )}

          <div className="d-flex align-center">
            {prevUrl && (
              <button
                className="btn btn-primary rounded-pill m-3 "
                onClick={() => {
                  setPokemons([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="btn btn-primary rounded-pill m-3 "
                onClick={() => {
                  setPokemons([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonsApi;
