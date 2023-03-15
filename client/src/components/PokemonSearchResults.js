import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonCards from "./PokemonCards";
import { useParams, useNavigate, Link } from "react-router-dom";

function PokemonSearchResults({searchTerm}) {
  const { keyword } = useParams();
  const [updatedKeyword, setUpdatedKeyword] = useState(keyword);
  const navigate = useNavigate();
  const [pokemons, setPokemons ] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(false);


  useEffect(() => {
    setIsLoadingPokemons(true);
    console.log(keyword)
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/search/${keyword}`)
      .then((res) => {
        console.log(res.data);
        setPokemons(res.data)
        setIsLoadingPokemons(false);
      })
      .catch((e) => console.log(e));
  }, []);


  useEffect(() => {
    setIsLoadingPokemons(true);
    console.log(keyword)
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/search/${keyword}`)
      .then((res) => {
        console.log(res.data);
        setPokemons(res.data)
        setIsLoadingPokemons(false);
      })
      .catch((e) => console.log(e));
  }, [keyword]);


  return  (
    <>
     <div className="container">
        <div className="row">
        <h1 className="color-blue roboto fs-2 m-3">Results for "{keyword}" Pokémons</h1>
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

export default PokemonSearchResults;
