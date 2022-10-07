import axios from "axios"

const API = 'https://pokeapi.co/api/v2/pokemon/?limit=1154'

export const getPokemons = async () => (
  await axios.get(API).then(res => res.data.results)
)

export const getPokemonByIdOrName = async (id) => (
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data)
)

export const getPokemonTypes = async () => (
  await axios.get('https://pokeapi.co/api/v2/type/').then(r => r.data.results)
)

export const getPokemonByType = async (type) => (
  await axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(r => r.data.pokemon)
)

export const formatData = (d) => ({
  name: d.name,
  image: d.sprites.front_default,
  moves: d.moves,
  types: d.types,
  abilities: d.abilities
}) 

export const formatPokemonType = (d) => ({
  name: d.pokemon.name,
  url: d.pokemon.url
})