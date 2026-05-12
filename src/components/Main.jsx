import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

export default function Main() {
    const [pokemon, setPokemon] = useState({
        name: "",
        imageUrl: "",
    })

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/132")
            .then(res => res.json())
            .then(data => {
                setPokemon(prev => ({
                    ...prev,
                    name: data.name,
                    imageUrl: data.sprites.front_default
                }))
            })
            .catch(err => console.error(err))
    }, [])

    function getRandomPokemon() {
        const randomId = Math.floor(Math.random() * 1025) + 1

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(prev => ({
                    ...prev,
                    name: data.name,
                    imageUrl: data.sprites.front_default
                }))
            })
    }

    function handleChange(event) {
        const { value, name } = event.target

        setPokemon(prevPokemon => ({
            ...prevPokemon,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>
                    Pokemon
                    <input
                        type="text"
                        name="TopText"
                        onChange={handleChange}
                        value={pokemon.topText}
                    />
                </label>

                <button onClick={getRandomPokemon}>Search Pokedex</button>
            </div>
            <Pokemon {...pokemon} />
        </main>
    )
}