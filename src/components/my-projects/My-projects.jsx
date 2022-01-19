import React from 'react';
import PokemonContainer from '../pokemons/PokemonContainer';
import MovieContainer from '../movies/MovieContainer';
import "./My-projects.css"

function MY_PROJECTS() {
  return (
    <>
      <h1 className="p-title">These are my Projects:</h1>
      <div className="p">
        <div className='p-left'>
          <div className='p-left-container'>
            <PokemonContainer/>
          </div>
        </div>
        <div className='p-right'>
          <div className="p-right-container">
            <div className='p-right-container-mirror'>
              <MovieContainer/>
            </div>
            
          </div>

        </div>
      </div>
    </>
    );
}

export default MY_PROJECTS;
