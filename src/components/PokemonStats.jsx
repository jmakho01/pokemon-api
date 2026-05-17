export default function PokemonStats({ height, weight, types, generation}) {
    return (
        <div className="pokemon-stats">
            <p><strong>Height: </strong>{height * 10} cm</p>
            <p><strong>Weight: </strong>{weight * 100} g</p>
            <p><strong>Generation: </strong>{generation}</p>

            <div className="types">
                {types.map(type => (
                    <span key={type} className={`type ${type}`}>
                        {type}
                    </span>
                ))}
            </div>
        </div>
    )
}