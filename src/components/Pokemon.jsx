export default function Pokemon(props) {
    return (
        <div>
            <img src={props.imageUrl}/>
            <h1>{props.name}</h1>
        </div>
    )
}