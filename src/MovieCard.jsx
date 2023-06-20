import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster} alt="loading img" />
        </div>
        <div>
            <h3>{movie.Title}</h3>
            <span>{movie.Type}</span>

        </div>
      
    </div>
  )
}

export default MovieCard
