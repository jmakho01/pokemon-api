export default function PokemonImage({ image, name }) {
    return (
        <div className="pokemon-image">
            <img src={image} alt={name} />
        </div>
    )
}