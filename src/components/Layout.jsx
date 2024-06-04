import Link from "next/link"

import style from '../styles/Layout.module.css'

export default function Layout(props) {

    return(
        <div className={style.layout}>  
            <div className={style.cabecalho}>
                cabecalho
            </div>  
            <div className={style.conteudo}>
                conteudo
            </div>        
            
            <Link href="/">Voltar</Link>
            {props.children}
        </div>
    )
}