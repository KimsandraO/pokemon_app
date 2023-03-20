import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, navigate, useNavigate } from "react-router-dom";
import PokemonApiDetails from "./PokemonApiDetails";
function PokemonsApiCards() {
  //console.log(pokemon);
  const { _id } = useParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("hhhh", pokemons);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/extpokemons`)
      .then((res) => setPokemons(res.data))
      .catch((e) => console.log(e));
    setLoading(false);
  }, []);
  return (
    <>
          <h1 className="color-blue roboto fs-2 m-3">
            Pokemon API Resulsts
          </h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map((item) => {
          return (
            <>
              <div className="col-12 col-lg-4 col-xl-3 mb-4 " key={item._id}>
                <div className="pokemon-card lightgray-bg p-0 m-1">
                  <div className="header-card blue-bg p-1">
                    <h2 className="text-white">{item.name}</h2>
                  </div>
                  <div className="body-card">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item._id}.svg`}
                      alt={item.name}
                      className="img-fluid thumbnail"
                    />
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
