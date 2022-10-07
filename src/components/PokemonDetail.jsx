import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonByIdOrName, getPokemonByType, formatData } from "../services"
import imgDefault from '../resource/pokLogo.png'

import '../index.css'

 const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getPokemonByIdOrName(id).then(r => setPokemonData(formatData(r)))
    setIsLoading(false)
  }, [])

  console.log(pokemonData)
  return (
    <React.Fragment>
      {isLoading ? 
        <p>Cargando...</p>
      :
      <div className="pokemonDetail">
        <div className="pokemon">
          <picture>
            <img src={pokemonData.image || imgDefault} alt="" />
          </picture>
          <h2> {pokemonData.name} </h2>
          <div className="abilities">
              {
                  pokemonData.abilities?.map(a => (
                    <p key={a.ability.name}> 
                      {a.ability.name} 
                    </p>
                  ))
              }
          </div>
        </div>
        <div className="types">
              <h3>Types</h3>
              <div className="typesContent">
                {
                  pokemonData.types?.length ?
                    pokemonData.types?.map(t => (
                      <p> {t.type.name} </p>
                    ))
                  :
                      <p>No types</p>
                }
              </div>
        </div>
        <div className="moves">
                <h3>Moves</h3>
                <ul className="movesContent">
                  {
                    pokemonData.moves?.length ?
                      pokemonData.moves?.map(m => (
                        <li> {m.move.name} </li>
                        ))
                    :
                        <p>No moves</p>
                  }
                </ul>
        </div>
      </div>
        
      }
    </React.Fragment>
  )
 }

 export { PokemonDetail }