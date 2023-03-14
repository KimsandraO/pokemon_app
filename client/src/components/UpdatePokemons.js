import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePokemons() {
  const navigate = useNavigate();
  const { pokemon_id } = useParams();

  const [pokemon, setPokemon] = useState({
    name: "",
    abilities: "",
    weakness: "",
    description: "",
    height: "",
    weight: "",
    image: "",
    gender: "",
    type: "",
  });

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${pokemon_id}`
      )
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, [pokemon_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPokemon({ ...pokemon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${pokemon_id}`,
        pokemon
      )
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };

  return (
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-sm-12 blue-color">UPDATE POKEMON</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-sm-6 gray-color">
            <div class="mb-3 p-5">
              <label class="form-label">Name OF YOUR POKEMON</label>
              <input
                type="text"
                value={pokemon.name}
                class="form-control rounded-pill p-2 border border-primary"
                placeholder="Pokemon Name..."
                onChange={handleChange}
              />
              <label class="form-label mt-3">IMAGE</label>
              <input
                type="text"
                value={pokemon.image}
                class="form-control rounded-pill p-2 border border-primary"
                placeholder="Image Link..."
                onChange={handleChange}
              />
              <label class="form-label mt-3">DESCRIPTION</label>
              <textarea
                value={pokemon.description}
                class="form-control form-textarea"
                placeholder="Leave a comment here..."
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div class="col-sm-6 yellow-color">
            <div className="row mt-5">
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">HEIGHT</label>
                  <input
                    type="text"
                    value={pokemon.height}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 2' 00"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">WEIGHT</label>
                  <input
                    type="text"
                    value={pokemon.weight}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 18,7"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="p-5">
                  <label class="form-label">ABILITIES</label>
                  <input
                    type="text"
                    value={pokemon.abilities}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-5">
                  <label class="form-label">WEAKNESS</label>
                  <input
                    type="text"
                    value={pokemon.weakness}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">GENDER</label>
                  <input
                    type="text"
                    value={pokemon.gender}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">TYPE</label>
                  <input
                    type="text"
                    value={pokemon.type}
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row mt-5 mb-4">
              <div className="col-5"></div>
              <div className="col-2">
                <button class="btn btn-primary" id="addform-btn" type="submit">
                  Update
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-sm-12 blue1-color mb-3"></div>
      </div>
    </div>
  );
}

export default UpdatePokemons;
