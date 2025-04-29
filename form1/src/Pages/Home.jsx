import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";
import { fetchPopularMovies, searchMovies } from "../../api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(!"Search query:", search);
    if (!search.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(search);
      if (searchResults.length === 0) {
        setError("No movies found");
      } else {
        setMovies(searchResults);
        setError(null);
      }
    } catch (err) {
      console.log(err);
      setError("failed to search movies...");
    } finally {
      setLoading(false);
    }
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
            placeholder="Search for a movie..."
          />
          <button type="submit" className="search-button">
            search
          </button>
        </form>

        {loading && <p>Loading movies ...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="movie-grid">
        {!loading && !error && movies.length === 0 && <p>No movies foound.</p>}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
