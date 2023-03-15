import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PokemonsApiDetails from "./components/PokemonApiDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import PokemonDetails from "./components/PokemonDetails";
import UpdatePokemons from "./components/UpdatePokemons";
import PokemonsApi from "./components/PokemonsApi";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import PokemonsResults from "./components/PokemonsResults";
import PokemonSearchResults from "./components/PokemonSearchResults";
import Search from "./components/Search";
import { useEffect, useState } from "react"

function App() {


  
  return (
    <div className="App">
      <Header />
      <Search />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurPokemons" element={<PokemonsResults />} />
          <Route path="/OurPokemons/:keyword" element={<PokemonSearchResults />} />
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
      <Footer />
    </div>
  );
}

export default App;
