import Header from "../../../cabPag/header"
import "./pi.css"
import img01 from "../../../../images/pic01.png"
import PiePag from "../../../piePag/Piepag"
import img02 from "../../../../images/pic0102.png"
import imag03 from "../../../../images/pic0103.png"
import imag04 from "../../../../images/pic0104.png"
import imag05 from "../../../../images/pic0105.png"
import imag06 from "../../../../images/pic0106.png"
import imag07 from "../../../../images/pic0107.png"
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import { ScrollRestoration } from "react-router-dom"


const PI = ()=>{


    return (
        <div className="contProyecto" style={{backgroundColor: "rgb(49 36 80)"}}>
            
            
            <Header ruta={"/eventix"}/>
          
            
		
			<div className="contenedorPi" >

				
                <section >
                    <div className="dibidibadidibu">

                        <h1 >FOOD-APP</h1>

                        <span ><img src={img01} alt="" className="imagen" /></span>

                        <p>
                            La FoodApp permite visualizar 9 recetas por paginas donde se muestran su imagen, su nombre, 
                            el nivel saludable y el tipo de dieta. En el detalle de cada receta se muestran la descripción 
                            de la misma y los pasos de preparación.  También la App permite hacer búsquedas de la receta por 
                            nombre, filtrar por tipo de dieta, ordenar alfabéticamente o por nivel saludable. El usuario puede 
                            crear una receta a través de un formulario controlado, para evitar que se ingresen datos erróneos. 
                        </p>
                    
                        <p>Este Proyecto se realizo con las siguientes tecnologías:</p>

                        <ul className="contUl">

                            <div>

                                <li className="li">FrontEnd:</li>
                                <ul className="ulala">
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>CSS Puro</li>
                                </ul>
                            </div>
                            
                            
                            <div>
                                <li className="li">BackEnd:</li>
                                <ul className="ulala">
                                    <li>Node.js</li>
                                    <li>Express</li>
                                </ul>
                            </div>
                            
                            <div>
                                <li className="li">Database:</li>
                                <ul className="ulala">
                                    <li>PostgreSQL</li>
                                    <li>Sequelize</li>
                                </ul>
                            </div>
                            
                            <div>
                                <li className="li">Control de Versión:</li>
                                <ul className="ulala">
                                    <li>Git y GitHub</li>
                                </ul>
                            </div>
                            
                        </ul>
                    
                        <p>Si le interesa conocer mas de la App puede ingresar haciendo click <a href="https://pi-food-jwve.vercel.app/" target="_blank">AQUÍ</a>.<br></br><span>Y si le interesa ver el código puede ingresar haciendo click <a href="https://github.com/MaxMdr2022/PI-Food" target="_blank">AQUÍ</a>.
                        </span></p>


                        <h3>Video del Proyecto</h3>

                        <div className="video">

                            <ReactPlayer className="imagen" url={"https://vimeo.com/822731831?share=copy"} controls/>
                        </div>


                        <div className="video2">
                            <p>Haciendo click en el icono puede visualizar un video del proyecto.</p>
                            <a href="https://vimeo.com/822731831?share=copy" target="_blank"><FontAwesomeIcon  icon={faVideo}/></a>     

                        </div>


                        <h3>Algunas imágenes del proyecto</h3>
                        
                        <p>Home:</p>
                        <span ><img src={img02} alt="" className="imagen" /></span>
                        <p>Formulario para crear una receta:</p>
                        <span ><img src={imag03} alt="" className="imagen" /></span>
                        <span ><img src={imag04} alt="" className="imagen" /></span>
                        <p>Visualización de la receta creada en el Home:</p>
                        <span ><img src={imag05} alt="" className="imagen" /></span>
                        <p>Detalle de una receta:</p>
                        <span ><img src={imag06} alt="" className="imagen"/></span>
                        <span ><img src={imag07} alt="" className="imagen"/></span>
                    </div>
                </section>

			</div>

            <PiePag />

            <ScrollRestoration />
        </div>
    )
}

export default PI