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

const PI = ()=>{


    return (
        <div style={{backgroundColor: "rgb(49 36 80)"}}>
            
            <Header />
		
			<div className="contenedorPi" >

				
                <section >
                    <div className="dibidibadidibu">

                        <h1 >FOOD-APP</h1>

                        <span ><img src={img01} alt="" /></span>

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
                    
                        <p>Si le interesa conocer mas de la App puede ingresar haciendo click <a href="https://pi-food-jwve.vercel.app/">AQUÍ</a>.<br></br><span>Y si le interesa ver el código puede ingresar haciendo click <a href="https://github.com/MaxMdr2022/PI-Food">AQUÍ</a>.
                        </span></p>
                        <h3>Algunas imágenes del proyecto</h3>
                        
                        <p>Home:</p>
                        <span ><img src={img02} alt="" /></span>
                        <p>Formulario para crear una receta:</p>
                        <span ><img src={imag03} alt="" /></span>
                        <span ><img src={imag04} alt="" /></span>
                        <p>Visualización de la receta creada en el Home:</p>
                        <span ><img src={imag05} alt="" /></span>
                        <p>Detalle de una receta:</p>
                        <span ><img src={imag06} alt="" /></span>
                        <span ><img src={imag07} alt="" /></span>
                    </div>
                </section>

			</div>

            <PiePag />
        </div>
    )
}

export default PI