import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPokemonByIdOrName, getPokemons } from "../services"

const SearchByName = () => {
    const [pokemonName, setPokemonName] = useState('')
    const [allPokemon, setAllPokemon] = useState([])
    const navigate = useNavigate()

    const searchPokemon = (e) => {
        e.preventDefault()
        const exist = allPokemon.find(p => p.name === pokemonName)
        if (exist) {
            navigate(`/pokedex/${pokemonName}`)
            setPokemonName('')
        } else {
            alert('Pokemon not found, please try again.')
        }
    }

    useEffect(() => {
        getPokemons().then(r => setAllPokemon(r))
    }, [])

    return(
        <div className="searchByName">
            <form onSubmit={searchPokemon}>
                <input 
                    type="text" 
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                    placeholder="Search by pokemon name"
                />
            </form>
        </div>
    )
}

export { SearchByName }