import { changePag } from "../redux/slices/pagSlice"
import { useDispatch } from "react-redux"

const SearchByType = ({ types, setSearchType, setTypePokemon}) => {

    const dispatch = useDispatch()

    const handlePokemonTypes = (e) => {
        if (e.target.value === 'all') {
            setSearchType(1)
            setTypePokemon('all')
        } else {
            setSearchType(2)
            setTypePokemon(e.target.value)
        }
        dispatch(changePag(1))
    }

    return (
        <select
            name="type"
            onChange={handlePokemonTypes}
        >
            <option value="all">
                All pokemons
            </option>
            {
                types.map(t => (
                    <option
                        value={t.name}
                        key={t.name}
                    >
                        {t.name}
                    </option>
                ))
            }
        </select>
    )
}

export { SearchByType }