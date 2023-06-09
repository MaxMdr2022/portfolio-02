import "./header.css"
import { Link } from "react-router-dom"
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
					
					<Link className="link" to={"/"}>Home</Link>
				    <Link className="link" to={ruta}>Siguiente Proyecto</Link>
					
				</nav>
            </div>
        </header>
       
    )
}

export default Header;