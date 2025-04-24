import React from 'react'

const Movie = ({movie}) => {
    const handleClick =() => {
        alert("Clicked")
    }
  return (
    <div className='movie-card'>
        <div className='movie-card-image'>
            <img src={Movie.url} alt={Movie.title} />
            <div>
                <button className='movie-overlay' onClick={handleClick}>💗</button>
            </div>
        </div>

        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.release_date}</p>
        </div>
        
    </div>
  )
}

export default Movie