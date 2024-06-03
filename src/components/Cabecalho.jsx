export default function Cabecalho(props) {
    console.log(props)
    return (
        <header>
           <h2>{props.titulo}</h2>
        </header>
    )
}