import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  console.log(id);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = (e) => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${e.target.value}`
      )
      .then((res) => navigate(`/OurPokemons`))
      .catch((e) => console.log(e));
  };

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
                <img
                  src={pokemon?.image}
                  alt={pokemon?.name}
                  className="img-fluid"
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
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4>Abilities</h4>
                    <p className="text-start">
                      {pokemon.abilities?.map((e) => (
                        <span>{e}</span>
                      ))}
                    </p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4>Weakness</h4>
                    <p className="text-start">
                      {pokemon.weakness?.map((e) => (
                        <span>{e}</span>
                      ))}
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
                      {pokemon.type?.map((e) => e).join(", ")}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h4 style={{ color: "#FF0000" }}>Created At:</h4>
                    <p className="text-start">
                      <span>
                        {moment(pokemon?.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h4 style={{ color: "#FF0000" }}>Updated At:</h4>
                    <p className="text-start">
                      <span>
                        {moment(pokemon?.updatedAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="buttons mt-5">
                  <Link
                    to={`/Pokemons/update/${id}`}
                    className="btn btn-primary rounded-pill m-3"
                    type="button"
                  >
                    <span class="material-symbols-sharp">edit</span>Edit
                  </Link>
                  <button
                    className="btn btn-danger rounded-pill m-3"
                    value={pokemon?._id}
                    onClick={handleDelete}
                    type="button"
                  >
                    {" "}
                    <span class="material-symbols-sharp">delete</span>Delete
                  </button>
                </div>
                <div className="buttons">
                  <Link
                    to="/OurPokemons"
                    className="btn btn-secondary rounded-pill m-3"
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
  );
}

export default PokemonDetails;
