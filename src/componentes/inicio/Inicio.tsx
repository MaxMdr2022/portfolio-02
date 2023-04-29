import QuienSoy from "../quienSoy/quienSoy"
import Proyectos from "../proyectos/Proyectos"
import Formulario from "../formulario/Formulario"
import PiePag from "../piePag/Piepag"
// import BarraLateral from "../barraLateral/BarraLateral"
import {useRef} from "react"
import "./inicio.css"

function Inicio() {

  const ref = useRef <HTMLDivElement | null >(null)
  const ref2 = useRef <HTMLDivElement | null >(null)

  const ref3 = useRef <HTMLDivElement | null >(null)


	const handleClick = ()=>{

		ref.current?.scrollIntoView({behavior: "smooth"})
	}
	const handleClick2 = ()=>{

		ref2.current?.scrollIntoView({behavior: "smooth"})
	}
	const handleClick3 = ()=>{

		ref3.current?.scrollIntoView({behavior: "smooth"})
	}

  return (
    <div className="contenedor">
      
	  	<div className="contenedorSideBar">

			<div className="barraLateralDiv">
				
				<div className="contenedorBotones">
						
					<button className="btn" onClick={handleClick} >¿Quién Soy?</button>
					<button className="btn"onClick={handleClick2} >Proyectos</button>
					<button className="btn"onClick={handleClick3} >Contacto</button>

					{/*<input onClick={handleClick} value={"¿Quién Soy?"} type="button" />
					<input onClick={handleClick2} value={"Proyectos"} type="button" />
					<input onClick={handleClick3} value={"Contacto"} type="button" />*/}
						
				</div>
			
			</div>
		</div>
      
		<div>

			<div className="QuienSoyDiv" ref={ref} >

				<QuienSoy />	
			</div>
		
			<div className="ProyectosDiv" ref={ref2} >

				<Proyectos  />

			</div>

			<div className="FormularioDiv" ref={ref3}>
				
				<Formulario />
			</div>

			<PiePag />

		</div>


    </div>
  )
}

export default Inicio