import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import Movie from "../Components/Movie";
import Footer from "../Components/Footer";

const Favourite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="">
        <h2>Your favorite</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
};

export default Favourite;
