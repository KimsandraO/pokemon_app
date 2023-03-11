const Pokemon = require("../models/pokemon");

const createPokemon = async (req, res) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({ _id: req.params.id });
    if (pokemons.length === 0) {
      res.status(500).json({ message: "Pokemon not found" });
    }
    res.json(pokemons[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedPokemon) {
      res.status(500).json({ message: "Pokemon not able to update" });
    }
    res.json(updatedPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deletedPokemon) {
      res.status(500).json({ message: "Pokemon not deleted" });
    }
    res.json(deletedPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemonById,
};
