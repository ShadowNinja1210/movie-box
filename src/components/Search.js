import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import _ from "lodash";
import "../App.css";
import films from "../films.json";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = films.movies.filter((film) => _.lowerCase(film.name).includes(_.lowerCase(searchQuery)));
    setSearchQuery("");
    navigate("/search");
    // eslint-disable-next-line no-lone-blocks
    {
      setData(data);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} onKeyDown={handleKeyDown} value={searchQuery} type="text" placeholder="Search your favorite movie" className="search-bar" />
      </form>
    </div>
  );
}

export default Search;
