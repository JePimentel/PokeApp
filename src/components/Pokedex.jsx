import { useSelector  } from "react-redux"
import React, { useEffect, useState } from "react"
import { 
  getPokemonByType,
  getPokemons, 
  getPokemonTypes,
  formatPokemonType
} from '../services'
import _ from 'lodash'
import axios from "axios"
import imgDefault from '../resource/pokLogo.png'
import { changePag } from "../redux/slices/pagSlice"

import '../index.css'
import { PokemonCard } from "./PokemonCard"
import { Paginations } from "./Paginations"
import { SearchByType } from "./SearchByType"
import { SearchByName } from "./SearchByName"
 
const Pokedex = () => { 
  const [data, setData] = useState([]) 
  const [types, setTypes] = useState([])
  const [searchType, setSearchType] = useState(1)
  const [typePokemon, setTypePokemon] = useState('all')
  const [pokemonsPerPag, setPokemonsPerPag] = useState(10)
  const [isLoading, setIsLoading] = useState(true)
  const [totalPags, setTotalPags] = useState(0)
 
  const name = useSelector(state => state.userSlice)
  const pag = useSelector(state => state.pagSlice)

  const formatData = (pokemons) => _.chunk(pokemons, pokemonsPerPag) 
  const handlePromises = async (promises) => ( 
    await Promise.all(promises).then(res => res.map(r => ({ 
      name: r.data.name,
      image: r.data.sprites.front_default || imgDefault, 
      id: r.data.id 
    })))
  )

  //1 = all - 2 = type - 3 = name

  const requestType = async () => {
    if (searchType === 1) {
      const dataSearched = formatData(await getPokemons())
      setTotalPags(dataSearched.length)
      return dataSearched
    } else if (searchType === 2) {
      const dataSearched = await getPokemonByType(typePokemon)
      const dataBuilded = formatData(dataSearched.map(d => formatPokemonType(d)))
      setTotalPags(dataBuilded.length)
      return dataBuilded
    }
  }

  const buildingData = () => {
    requestType().then(async data => {
      if (data.length) {
        const promisesPokemon = data[pag].map(pok => axios.get(pok.url))
        const array = await handlePromises(promisesPokemon)
        setData(array)
        setIsLoading(false)
      } else {
        alert(`Not pokemon type ${typePokemon}, please select other.`)
      }
    })

  }

  useEffect(() => {
    buildingData() 
  }, [pag, typePokemon])

  useEffect(() => {
    getPokemonTypes().then(r => setTypes(r))
  }, [])


  return ( 
    <div className="pokedex"> 
      <h1> Welcome {name} </h1>
      {isLoading ? 
        <p>Cargando...</p>  
      : 
        <React.Fragment>
          <div className="filters">
            <SearchByType 
              types={types}
              setSearchType={setSearchType}
              setTypePokemon={setTypePokemon}
            />
            <SearchByName />
          </div>
          <div className="containerPokemons"> 
            {
              data.map(p => (
                <PokemonCard 
                key={p.id} 
                id={p.id} 
                name={p.name} 
                image={p.image} 
                />
              ))
            } 
          </div> 
          <Paginations totalPags={totalPags}/>
        </React.Fragment>
      } 
    </div> 
  ) 
} 
 
export { Pokedex } 