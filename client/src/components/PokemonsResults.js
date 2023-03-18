import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import { useRef } from "react";
import ReactPaginate from "react-paginate";

function PokemonsResults({ userData }) {
  const [pokemons, setPokemons] = useState([]);

  const [isLoadingPokemons, setIsLoadingPokemons] = useState(false);
  const [limit, setLimit] = useState(4);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

  /*   useEffect(() => {
    setIsLoadingPokemons(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons`)
      .then((res) => {
        //console.log(res.data);
        setPokemons(res.data);
        setIsLoadingPokemons(false);
      })
      .catch((e) => console.log(e));
  }, []); */

  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }
  function changeLimit() {
    currentPage.current = 1;
    getPaginatedUsers();
  }

  function getPaginatedUsers() {
    fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/pokemons?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setPokemons(data.result);
      });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="color-blue roboto fs-2 m-3">
            Welcome to our Pokemon Website
          </h1>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={currentPage.current - 1}
          />
          {isLoadingPokemons ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            pokemons.map((pokemon) => (
              <PokemonCards
                key={pokemon._id}
                name={pokemon.name}
                abilities={pokemon.abilities.map((ability) => (
                  <span className="tags">{ability}</span>
                ))}
                weakness={pokemon.weakness.map((weak) => (
                  <span className="tags"> {weak} </span>
                ))}
                image={pokemon.image}
                id={pokemon._id}
              />
            ))
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current - 1}
        />
      </div>
    </>
  );
}

export default PokemonsResults;
