import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokemon.css';
import {
  useState
} from "react";
import PokemonThumbnail from "./PokemonThumbnail";
const axios = require('axios').default;

function PokemonContainer() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMorePokemons, setLoadMorePokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=3')
  const getAllPokemons = async () => {
    const res = await axios(loadMorePokemons)
    const data = await res.data
    setLoadMorePokemons(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.data
        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }
  return (
    <div className="app-container">
      <h1 class="text-stone-900 font-bold text-3xl p-4 mb-2 mt-6">Pokemons</h1>
      <div className="pokemon-container">
        <div className="all-container" class="w-full">
          {allPokemons.map((pokemon, index) => 
            <PokemonThumbnail
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
            )}
        </div>
        <button class="mb-16 rounded-lg shadow w-max bg-purple-900 text-white p-1 px-4 w mt-3 font-semibold" onClick={()=> getAllPokemons()}>Load Pokemons</button>
        </div>
    </div>
  );
}
export default PokemonContainer;

