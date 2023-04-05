import Card from "./Card";

function SearchResult(props) {
  return (
    <div className="movie-log">
      {props.movies.map((film) => (
        <Card key={film._id} name={film.name} poster={film.poster} rating={film.rating} year={film.year} duration={film.duration} />
      ))}
    </div>
  );
}

export default SearchResult;
