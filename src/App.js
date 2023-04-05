import { createContext, useState } from "react";
import { ReactComponent as MyLogo } from "./assets/movie-box-logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Movie from "./components/Movie";
import Search from "./components/Search";
import films from "./films.json";
import SearchResult from "./components/SearchResults";

export const DataContext = createContext();

// Listen for changes to user's preferred color scheme
window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="main">
        {" "}
        <MyLogo className="logo" />
        <Search />
        <Routes>
          <Route path="/" element={<Movie movies={films.movies} />} />
          <Route path="/search" element={<SearchResult movies={data} />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
