import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PokemonsCards from "./components/PokemonCards";
import Header from "./components/Header";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import PokemonDetails from "./components/PokemonDetails";
import UpdatePokemons from "./components/UpdatePokemons";
import PokemonsApi from "./components/PokemonsApi";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurPokemons" element={<PokemonsCards />} />
          <Route path="/pokemons/new" element={<AddForm />} />
          <Route path="/pokemons/:pokemon_id" element={<PokemonDetails />} />
          <Route
            path="/Pokemons/:pokemons_id/update"
            element={<UpdatePokemons />}
          />
          <Route path="/Pokemons/api/pokemons" element={<PokemonsApi />} />
        </Routes>
        <AddForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
