import React from 'react'
import Movie from '../Components/Movie';

const Home = () => {
  const movies = [
    {id: 1, title: "Jurassic Park", description: "Dinosaurs in a theme park", release_date: "1993-06-11"},
    {id: 2, title: "The Matrix", description: "A computer hacker discovers the world is a simulation", release_date: "1999-03-31"},
    {id: 3, title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology", release_date: "2010-07-16"},
  ];

  return (
    <div>
        <div className='movie-grid'>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default Home