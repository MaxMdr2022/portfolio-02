// import {LegacyRef, forwardRef} from "react"
import piimg from "../../images/pic01.png"
import pfimg from "../../images/pic02.png"
import "./proyectos.css"
import { Link } from "react-router-dom"

const  Proyectos = () => {


    return (
        <div className="contenedorProyectos">
        
            <section >
                <div className="contProy">

                    <Link to={"/proyecto-food"}className="imagen"><img src={piimg} alt="" data-position="top center"  /></Link>
                    
                    <div className="contenedorTexto">
                        <h2>Proyecto Individual Food App</h2>
                        <p>Single Page Aplication donde se pueden visualizar recetas de la API de Spoonacular. </p>
                        
                        <a href="/proyecto-food" className="btnVerMas">VER MÁS</a>
                        
                    </div>


                </div>
                    
                

                <section>

                    <div className="contProy2">

                        <a href="/eventix" className="imagen" ><img src={pfimg} alt="" data-position="top center" /></a>
                       
                        <div className="contenedorTexto">
                            <h2>Eventix - Proyecto Grupal</h2>
                            <p>Plataforma web donde se pueden visualizar y comprar entradas para eventos.</p>
                            
                            <a href="/eventix" className="btnVerMas" >VER MÁS</a>
                            
                        </div>
                        

                    </div>
                </section>
            </section>            
        </div>
    )

} 

export default ( Proyectos )