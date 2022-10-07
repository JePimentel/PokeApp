import { Link } from "react-router-dom"
import imgDefault from '../resource/pokLogo.png'

const PokemonCard = ({id, name, image}) => {
  return (
    <div className="pokemonCard">
      <picture>
        <img src={image || imgDefault} alt="" />
      </picture>
      <h5> {name} </h5>
      <Link to={`/pokedex/${id}`}>
        <small> Show </small>
      </Link>
    </div>
  )
}

export { PokemonCard }