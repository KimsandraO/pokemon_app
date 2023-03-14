import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonCards from "./PokemonCards";

function PokemonsResults() {

  const [pokemons, setPokemons ] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(false);


  useEffect(() => {
    setIsLoadingPokemons(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons`)
      .then((res) => {
        console.log(res.data);
        setPokemons(res.data)
        setIsLoadingPokemons(false);
      })
      .catch((e) => console.log(e));
  }, []);


  return  (
    <>
     <div className="container">
        <div className="row">
            {isLoadingPokemons ? 
            
            <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            :
            pokemons.map((pokemon) => (
              <PokemonCards key={pokemon._id} name={pokemon.name} abilities={pokemon.abilities.map((ability)=> <span className="tags">{ ability }</span>)} weakness={pokemon.weakness.map((weak)=><span className="tags"> {weak} </span> )} image={pokemon.image} id={pokemon._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default PokemonsResults;
