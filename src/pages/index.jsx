import Link from "next/link"
import style from "../styles/Home.module.css"
import Layout from "@/components/Layout"

export default function Inicio() {
    return (
        <Layout>
            <div className="center">
                <h2>Estilo Index</h2>
                <Link href="/estiloso">Estiloso</Link>
            </div>            
        </Layout>
    )
}