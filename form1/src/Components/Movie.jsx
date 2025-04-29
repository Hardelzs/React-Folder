import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import { FaRegHeart } from "react-icons/fa6";

const Movie = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
    console.log(movie.title, favorite);
    console.log(movie.id, favorite);
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <button
            className={`favorite-btn ${favorite ? "text-red-400" : ""}`}
            onClick={handleClick}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Movie;
