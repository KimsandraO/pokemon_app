import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePokemons() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [weakness, setWeakness] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState();
  const [gender, setGender] = useState("");
  const [type, setType] = useState([]);

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

  const [error, setError] = useState({
    name,
    image,
    abilities,
    description,
    weakness,
    height,
    weight,

    gender,
    type,
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPokemon({ ...pokemon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons/${id}`,
        pokemon
      )
      .then((res) => navigate(`/pokemons/${id}`))
      .catch((e) => setError(e.response.data.errors));
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-sm-12 blue-color">UPDATE POKEMON</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 gray-color">
            <div className="mb-3 p-5">
              <label className="form-label">Name OF YOUR POKEMON</label>
              {error.name && (
                <p className="text-danger h6">{error.name.message}</p>
              )}
              <input
                type="text"
                value={pokemon.name}
                className="form-control rounded-pill p-2 border border-primary"
                placeholder="Pokemon Name..."
                onChange={handleChange}
                name="name"
              />
              <label className="form-label mt-3">IMAGE</label>
              {error.image && (
                <p className="text-danger h6">{error.image.message}</p>
              )}
              <input
                type="text"
                value={pokemon.image}
                className="form-control rounded-pill p-2 border border-primary"
                placeholder="Image Link..."
                onChange={handleChange}
                name="image"
              />
              <label class="form-label mt-3">DESCRIPTION</label>
              {error.description && (
                <p className="text-danger h6">{error.description.message}</p>
              )}
              <textarea
                value={pokemon.description}
                className="form-control form-textarea"
                placeholder="Leave a comment here..."
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 yellow-color">
            <div className="row mt-5">
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">HEIGHT</label>
                  {error.height && (
                    <p className="text-danger h6">{error.height.message}</p>
                  )}
                  <input
                    type="text"
                    value={pokemon.height}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 2' 00"
                    onChange={handleChange}
                    name="height"
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">WEIGHT</label>
                  {error.weight && (
                    <p className="text-danger h6">{error.weight.message}</p>
                  )}
                  <input
                    type="text"
                    value={pokemon.weight}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 18,7"
                    onChange={handleChange}
                    name="weight"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="p-5">
                  <label class="form-label">ABILITIES</label>
                  <input
                    type="text"
                    value={pokemon.abilities}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                    name="abilities"
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-5">
                  <label className="form-label">WEAKNESS</label>
                  <input
                    type="text"
                    value={pokemon.weakness}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                    name="weakness"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">GENDER</label>
                  {error.gender && (
                    <p className="text-danger h6">{error.gender.message}</p>
                  )}
                  <input
                    type="text"
                    value={pokemon.gender}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                    name="gender"
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">TYPE</label>
                  <input
                    type="text"
                    value={pokemon.type}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={handleChange}
                    name="type"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col-5"></div>
              <div className="col-2">
                <button
                  className="btn btn-primary"
                  id="addform-btn"
                  type="submit"
                >
                  Update
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-sm-12 blue1-color mb-3"></div>
      </div>
    </div>
  );
}

export default UpdatePokemons;
