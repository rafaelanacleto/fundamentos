import Link from 'next/link'

export default function Navegador(props) {

    return (
        <div>
            <Link href="/teste">Testes</Link>
            <Link href="/estiloso">Estiloso</Link>
            <Link href="/">Voltar</Link>
        </div>
    )
}