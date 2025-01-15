import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
    //Estado - hooks- useState

    //const [nombreVariabble, funcionActualizar]=useState(valorInicial)
  
    const [mostrar,actualizaMostrar]= useState(true)
    const manejarClick = () => {
        actualizaMostrar()
    }
    return <section className= "orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;