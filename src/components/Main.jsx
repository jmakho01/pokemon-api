/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard.jsx"

export default function Main() {
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState("ditto")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchPokemon(search)
    }, [])

    async function getRandomPokemon() {
        const randomId = Math.floor(Math.random() * 1025) + 1
        fetchPokemon(randomId)
    }

    async function fetchPokemon(query) {
        try {
            setLoading(true)
            setError("")

            let endpoint = ""
            if(typeof query === "number") { endpoint = query }
            else { endpoint = query.toLowerCase() }

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${endpoint}`)
            if(!res.ok) throw new Error("Pokemon not found")

            const data = await res.json()
            const formattedPokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                height: data.height,
                weight: data.weight,
                types: data.types?.map(type => type.type.name)
            }

            setPokemon([formattedPokemon])
        } catch (err) {
            setError(err.message)
            setPokemon([])
        } finally {
            setLoading(false)
        }
    }

    function handleChange(event) {
        event.preventDefault()
        if(!search.trim()) return
        fetchPokemon(search)
    }

    return (
        <main>
            <form className="form" onSubmit={handleChange}>
                <input
                    type="text"
                    placeholder="Search Pokemon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit">
                    Search Pokedex
                </button>

                <button type="button" className="random-btn" onClick={getRandomPokemon}>
                    Random Pokémon
                </button>
            </form>
            
            {loading && <h2 className="message">Loading...</h2>}
            {error && <h2 className="error">{error}</h2>}
            
            {!loading && !error && (
                <section className="pokemon-grid">
                    {pokemon.map(poke => (
                        <PokemonCard
                            key={poke.id}
                            pokemon={poke}
                        />
                    ))}
                </section>
            )}
        </main>
    )
}