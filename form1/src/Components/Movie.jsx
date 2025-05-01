import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import { IoHeartCircleOutline } from "react-icons/io5";

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
          className="w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        />
        <div>
          <button
            className={`text-3xl absolute -mt-99 ml-60 ${favorite ? "text-red-400" : "text-white"}`}
            onClick={handleClick}
            
          >
            <IoHeartCircleOutline />
          </button>
        </div>
      </div>

      <div className="movie-info">
          <h1>{movie.title}</h1> 
        {/* <p>{movie.overview}</p> */}
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Movie;
