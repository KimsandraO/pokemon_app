const express = require("express");
const router = express.Router();
const {
  getAllPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemonById,
} = require("../controllers/Pokemons");

const pokemonFinder = require("../middlewares/pokemonFinder");
router.get("/", getAllPokemon);
router.get("/:id", pokemonFinder, getPokemonById);
router.post("/", createPokemon);
router.put("/:id", pokemonFinder, updatePokemon);
router.delete("/:id", pokemonFinder, deletePokemon);

module.exports = router;
