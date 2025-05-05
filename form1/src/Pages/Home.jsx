import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";
import Footer from "../Components/Footer";
import { fetchPopularMovies, searchMovies } from "../../api";
import { RiSearchLine } from "react-icons/ri";

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
        console.log(popularMovies);
        
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
        console.log(searchResults);
        
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
    <div className=" mx-auto p-4">
      <div className="serch-bar">
        <form onSubmit={handleSearch} className=" absolute flex gap-4 top-0 right-100 text-white mt-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a movie..."
            className="focus:outline-none w-full"
          />
          <button type="submit" className="">
          <RiSearchLine />
          </button>
        </form>

        {loading && <p>Loading movies ...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="grid grid-cols-6 gap-10">
        {!loading && !error && movies.length === 0 && <p>No movies foound.</p>}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie}/>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
