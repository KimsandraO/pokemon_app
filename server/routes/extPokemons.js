const express = require("express");
const pokemonsExternalRouter = express.Router();
const {
  getExtPokemons,
  getExtPokemonById,
} = require("../controllers/externalPokemons");

pokemonsExternalRouter.get("/", getExtPokemons);
pokemonsExternalRouter.get("/:id", getExtPokemonById);

module.exports = pokemonsExternalRouter;
