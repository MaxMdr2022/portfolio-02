import "./header.css"

const Header = () =>{

    return (

        
        <header >
            <div className="contenedorHeader">
				<a href="/" ><h2>Maxi Meder</h2></a>

				<nav className="navi">
					
					<a href="/">Home</a>
				    <a href="/Eventix">Siguiente Proyecto</a>
					
				</nav>
            </div>
        </header>
       
    )
}

export default Header;