const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Pokemon name is Required!"] },
    type: { type: Array, required: [true, "type is Required!"] },
    abilities: { type: Array, required: [true, "abilities are Required!"] },
    weakness: { type: Array, required: [true, "weakness is Required!"] },
    description: { type: String, required: [true, "description is Required!"] },
    height: { type: String, required: [true, "height is Required!"] },
    weight: { type: String, required: [true, "weight is Required!"] },
    gender: { type: String, required: [true, "gender is Required!"] },
    image: { type: String, required: [true, "image is Required!"] },
  },
  { timestamps: true }
);

const model = mongoose.model("pokemon", pokemonSchema);
module.exports = model;
