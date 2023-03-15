import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PokemonsApiDetails from "./components/PokemonApiDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import PokemonDetails from "./components/PokemonDetails";
import UpdatePokemons from "./components/UpdatePokemons";
import PokemonsApi from "./components/PokemonsApi";

import { Routes, Route } from "react-router-dom";
import PokemonsResults from "./components/PokemonsResults";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurPokemons" element={<PokemonsResults />} />
          <Route path="/pokemons/new" element={<AddForm />} />
          <Route path="/pokemons/publicPokemon" element={<PokemonsApi />} />
          <Route
            path="/pokemons/publicPokemon/:id"
            element={<PokemonsApiDetails />}
          />
          <Route path="/pokemons/:id" element={<PokemonDetails />} />
          <Route path="/Pokemons/update/:id" element={<UpdatePokemons />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
