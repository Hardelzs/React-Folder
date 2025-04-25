import React, { useState } from "react";
import Movie from "../Components/Movie";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Jurassic Park",
      description: "Dinosaurs in a theme park",
      release_date: "1993-06-11",
    },
    {
      id: 2,
      title: "The Matrix",
      description: "A computer hacker discovers the world is a simulation",
      release_date: "1999-03-31",
    },
    {
      id: 3,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology",
      release_date: "2010-07-16",
    },
  ];
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div>
      <div className="serch-bar">
        <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
        </form>

      </div>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(search) && (
              <Movie key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
