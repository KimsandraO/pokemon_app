const Pokemon = require("../models/pokemon");
//const ErrorResponse = require("../utils/errorResponse");

const createPokemon = async (req, res, next) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    next(
      res.status(500).json({ message: error.message, errors: error.errors })
    );
  }
};

const getAllPokemon = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    next(
      res.status(500).json({ message: error.message, errors: error.errors })
    );
  }
};

const getPokemonById = async (req, res, next) => {
  res.json(req.reqUser);
};

const getPokemonByKeyword = async (req, res, next) => {
  res.json(req.reqUser);
};

const updatePokemon = async (req, res, next) => {
  try {
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedPokemon);
  } catch (error) {
    next(
      res.status(500).json({ message: error.message, errors: error.errors })
    );
  }
};

const deletePokemon = async (req, res, next) => {
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({
      _id: req.params.id,
    });

    res.json(deletedPokemon);
  } catch (error) {
    next(
      res.status(500).json({ message: error.message, errors: error.errors })
    );
  }
};

module.exports = {
  getAllPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemonById,
  getPokemonByKeyword,
};
