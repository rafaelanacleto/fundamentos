import Navegador from "./Navegador"
import style from '../styles/Layout.module.css'

export default function Layout(props) {

    return (
        <div className={style.layout}>
            <div className={style.cabecalho}>
               <Navegador></Navegador>
            </div>
            <div className={style.conteudo}>
                {props.children}
            </div>
        </div>
    )
}