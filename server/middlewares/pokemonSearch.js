const Pokemon = require("../models/pokemon");
const ErrorResponse = require("../utils/errorResponse");
const pokemonSearch = async (req, res, next) => {
  try {
    const keyword = req.params.keyword.toLowerCase();
    const pokemon = await Pokemon.find({$or: [
                                                {name:{ $regex: new RegExp(keyword, 'i') }},
                                                {type:{ $regex: new RegExp(keyword, 'i') }},
                                                {abilities:{ $regex: new RegExp(keyword, 'i') }},
                                                {weakness:{ $regex: new RegExp(keyword, 'i') }}
                                            ]});
    req.reqUser = pokemon;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Cannot find pokemon with test  ${req.params.keyword} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = pokemonSearch;
