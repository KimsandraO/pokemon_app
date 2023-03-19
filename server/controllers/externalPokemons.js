const getExtPokemons = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  console.log(req.query);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const urls = [];
  for (
    let pokemons = (page - 1) * limit + 1;
    pokemons <= page * limit;
    pokemons++
  ) {
    urls.push(`${baseUrl}${pokemons}`);
  }

  try {
    const urlPokemons = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    );
    const pokemons = urlPokemons.map((urlPokemon) => {
      return {
        name: urlPokemon.name,
        image: urlPokemon.sprites.other["official-artwork"].front_default,
        _id: urlPokemon.id,
      };
    });
    res.json(pokemons);
  } catch (error) {
    console.log("Error", error);
  }
};

const getExtPokemonById = async (req, res) => {
  res.json(req.query);
};
module.exports = {
  getExtPokemons,
  getExtPokemonById,
};
