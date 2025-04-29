import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import Movie from "../Components/Movie";

const Favourite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2>Your favorite</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Favourite</h1>
      <p>This is the favourite page</p>
      <p>Here you can see your favourite items</p>
      <p>Click on the heart icon to add an item to your favourites</p>
    </div>
  );
};

export default Favourite;
