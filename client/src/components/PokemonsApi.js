import React from "react";
import PokemonsApiCards from "./PokemonsApiCards";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import ReactPaginate from "react-paginate";

function PokemonsApi({ userData }) {
  const [pokemons, setPokemons] = useState([]);

  const [limit, setLimit] = useState(20);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

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
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/extpokemons?page=${currentPage.current}&limit=${limit}`,
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
  /*   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/extpokemons`)
      .then((res) => setPokemons(res.data))
      .catch((e) => console.log(e));
  }, []); */

  console.log("ooooooooooooooo", pokemons);
  return (
    <>
      <div className="container">
        <div className="row">
          <PokemonsApiCards />
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

export default PokemonsApi;
