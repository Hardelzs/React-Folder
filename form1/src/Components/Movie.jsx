import React from 'react'
import { useMovieContext } from '../Contexts/MovieContext'

const Movie = ({movie}) => {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    const handleClick =(e) => {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

  return (
    <div className='movie-card'>
        <div className='movie-card-image'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={Movie.title} />
            <div>
                <button className={`favorite-btn ${favorite? "active" : "" }`} onClick={handleClick}>💗</button>
            </div>
        </div>

        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        
    </div>
  )
}

export default Movie