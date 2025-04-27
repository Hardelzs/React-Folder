import React, { useEffect, useState } from 'react'

const Movie = ({movie}) => {
    const [buttonClick, setButtonClick] = useState(false)
    const handleClick =() => {
        console.log(buttonClick);
        
    }
    useEffect(() => {
        setButtonClick("")
    })
  return (
    <div className='movie-card'>
        <div className='movie-card-image'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={Movie.title} />
            <div>
                {buttonClick ? "c": "b"}
                <button className='movie-overlay' onClick={handleClick}>💗</button>
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