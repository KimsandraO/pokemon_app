const Pokemon = require("../models/pokemon");
const ErrorResponse = require("../utils/errorResponse");
const pokemonFinder = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    req.reqUser = pokemon;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Cannot find pokemon with id ${req.params.id} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = pokemonFinder;
