import React from 'react';
import '../../css/index.css';
import './Movies.css'

const img_api = "https://image.tmdb.org/t/p/w1280";

function MovieThumbnail({ title, poster_path, overview, vote_average}){
    return(
        <div className="movie">
            <img src={img_api + poster_path} alt={title} />
            <div className='movie-info'>
                <h3 className="movie-title">{title}</h3>
                <span className='movie-votes'>{vote_average}</span>
            </div>

            <div className='movie-overview'>
                <h2 className='overview-title'>{title}</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}
export default MovieThumbnail