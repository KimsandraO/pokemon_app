const express = require("express");
const router = express.Router();
const {
  getAllPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemonById,
  getPokemonByKeyword,
} = require("../controllers/Pokemons");

const pokemonFinder = require("../middlewares/pokemonFinder");
const pokemonSearch = require("../middlewares/pokemonSearch");
router.get("/", getAllPokemon);
router.get("/:id", pokemonFinder, getPokemonById);
router.get("/search/:keyword", pokemonSearch, getPokemonByKeyword);
router.post("/", createPokemon);
router.put("/:id", pokemonFinder, updatePokemon);
router.delete("/:id", pokemonFinder, deletePokemon);

module.exports = router;
