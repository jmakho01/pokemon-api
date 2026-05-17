import PokemonImage from "./PokemonImage.jsx"
import PokemonStats from "./PokemonStats.jsx"

export default function PokemonCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <PokemonImage
                image={pokemon.image}
                name={pokemon.name}
            />

            <div className="pokemon-info">
                <h2>{pokemon.name}</h2>

                <PokemonStats
                    height={pokemon.height}
                    weight={pokemon.weight}
                    types={pokemon.types}
                    generation={pokemon.generation}
                />
            </div>
        </div>
    )
}