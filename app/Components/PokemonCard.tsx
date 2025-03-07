import Link from 'next/link'
import React from 'react'

import {Pokemon} from "../page"
import Image from 'next/image';

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard : React.FC<PokemonCardProps>= ({pokemon}) => {

  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.details.id}.png`;

    return (
        <Link href={`/pokemon/${pokemon.details.id}`} >
        <div className='bg-blue-400 rounded flex flex-col m-auto'>

          {/* Pokemon Image */}
          <div className='w-full m-auto'>
            <Image src={artworkUrl} className='w-full transition-transform duration-300 hover:scale-125' alt={pokemon.name}
            width={200} height={200}/>
          </div>
          
          {/* Pokemon Name*/}
          <div className='m-auto bg-blue-600 w-full flex flex-col justify-center items-center p-3 text-white'>
            <p >#{pokemon.details.id}</p>
            <h1 className='text-2xl'>{pokemon.name}</h1>
          </div>
        </div>
      </Link>
  )
}

export default PokemonCard
