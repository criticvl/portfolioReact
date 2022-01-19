import React, {useEffect, useState} from 'react';
import MovieThumbnail from './MovieThumbnail';
const axios = require('axios').default;
const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

function MovieContainer(){
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios(api)
    .then((data) => data.data)
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
  })
  return (
    <div className='movie-main-container'>
      <div className='movie-container'>
        {movies.map((movie) => <MovieThumbnail key={movie.id} {...movie}/>
        )}
        {/* button in dev */}
      </div>
    </div>
  );
}
export default MovieContainer;

