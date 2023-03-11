const express = require("express");
const router = express.Router();
const {
  getAllPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemonById,
} = require("../controllers/Pokemons");

router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.post("/", createPokemon);
router.put("/:id", updatePokemon);
router.delete("/:id", deletePokemon);

module.exports = router;
