const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: Array, required: true },
    abilities: { type: Array, required: true },
    weakness: { type: Array, required: true},
    height: { type: String, required: true},
    weight: { type: String, required: true},
    gender: { type: String, required: true},
    image: { type: String, required: true},
  },
  { timestamps: true }
);

const model = mongoose.model("pokemon", pokemonSchema);
module.exports = model;