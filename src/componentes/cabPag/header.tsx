import "./header.css"
// import { Proyectos } from "../../tipado/types";


interface Url {

    ruta: string
}

const Header = ({ruta}:Url) =>{

    return (

        
        <header >
            <div className="contenedorHeader">
				<a href="/" ><h2>Maxi Meder</h2></a>

				<nav className="navi">
					
					<a href="/">Home</a>
				    <a href={ruta}>Siguiente Proyecto</a>
					
				</nav>
            </div>
        </header>
       
    )
}

export default Header;