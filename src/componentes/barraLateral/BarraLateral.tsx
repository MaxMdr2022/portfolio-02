import {useRef} from "react"
import "./sideBar.css"


const BarraLateral = ()=>{

	const ref = useRef<null | HTMLElement>(null)

	const handleClick = () =>{

		ref.current?.scrollIntoView({behavior: "smooth"})
	}

    return (
        <div>
            <section >
				<div >
					<nav>
						<ul>
							<li><a href="#intro">¿Quién soy?</a></li>
							<button onClick={handleClick} >Proyectos</button>
							<li><a href="#three">Contacto</a></li>
						</ul>
					</nav>
				</div>
			</section>
        </div>
    )
}

export default BarraLateral