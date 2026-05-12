export default function Pokemon(props) {
    return (
        <div>
            <img src={props.imageUrl}/>
            <h1>{props.name}</h1>
            <h2>{props.height}</h2>
            <h2>{props.weight}</h2>
        </div>
    )
}