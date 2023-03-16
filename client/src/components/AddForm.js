import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons`, {
        name,
        abilities,
        description,
        weakness,
        height,
        weight,
        image,
        gender,
        type,
      })
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-sm-12 blue-color">ADD NEW POKEMON</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 gray-color">
            <div className="mb-3 p-5">
              <label className="form-label">Name OF YOUR POKEMON</label>
              <input
                type="text"
                value={name}
                className="form-control rounded-pill p-2 border border-primary"
                placeholder="Pokemon Name..."
                onChange={(e) => setName(e.target.value)}
              />
              <label class="form-label mt-3">IMAGE</label>
              <input
                type="text"
                value={image}
                className="form-control rounded-pill p-2 border border-primary"
                placeholder="Image Link..."
                onChange={(e) => setImage(e.target.value)}
              />
              <label class="form-label mt-3">DESCRIPTION</label>
              <textarea
                value={description}
                className="form-control form-textarea"
                placeholder="Leave a comment here..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 yellow-color">
            <div className="row mt-5">
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">HEIGHT</label>
                  <input
                    type="text"
                    value={height}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 2' 00"
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">WEIGHT</label>
                  <input
                    type="text"
                    value={weight}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 18,7"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="p-5">
                  <label className="form-label">ABILITIES</label>
                  <input
                    type="text"
                    value={abilities}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={(e) => setAbilities(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-5">
                  <label className="form-label">WEAKNESS</label>
                  <input
                    type="text"
                    value={weakness}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={(e) => setWeakness(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">GENDER</label>
                  <input
                    type="text"
                    value={gender}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="p-1 ms-5 me-5">
                  <label className="form-label">TYPE</label>
                  <input
                    type="text"
                    value={type}
                    className="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                    onChange={(e) => setType(e.target.value)}
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
                  SUBMIT
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <div class="col-sm-12 blue1-color mb-3"></div>
      </div>
    </div>
  );
}

export default AddForm;
