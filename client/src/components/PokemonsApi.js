import React from "react";
import PokemonsApiCards from "./PokemonsApiCards";

import { useEffect, useState } from "react";
import { useRef } from "react";
import ReactPaginate from "react-paginate";

function PokemonsApi({ userData }) {
  const [pokemons, setPokemons] = useState([]);
  const currentPage = useRef();
  const [limit, setLimit] = useState(20);
  const [pageCount, setPageCount] = useState(1);
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_SERVER_BASE_URL}/api/extpokemons?page=${currentPage.current}&limit=${limit}`
  );

  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers(url);
    setLoading(false);
  }, []);

  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }
  /*  function changeLimit() {
    currentPage.current = 1;
    getPaginatedUsers();
    
  } */

  function getPaginatedUsers(to) {
    fetch(to, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      });
  }
  /*   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/extpokemons`)
      .then((res) => setPokemons(res.data))
      .catch((e) => console.log(e));
  }, []); */

  //console.log("ooooooooooooooo", pokemons);

  function next() {
    getPaginatedUsers(nextUrl);
    console.log(nextUrl);
  }
  function prev() {
    getPaginatedUsers(prevUrl);
  }

  // useEffect(() => {

  //   return () => {

  //   }
  // }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <PokemonsApiCards pokemons={pokemons} loading={loading} />
        </div>
        <nav>
          <button onClick={next}>Next</button>
          <button onClick={prev}>Previous</button>
        </nav>
      </div>
    </>
  );
}

export default PokemonsApi;
