import Header from "../../../cabPag/header"
import ReactPlayer from "react-player"
import img01 from "../../../../images/pic02.png"
import img02 from "../../../../images/eventix01.png"
import img03 from "../../../../images/eventix02.png"
import img04 from "../../../../images/eventix03.png"
import img05 from "../../../../images/eventix04.png"
import img06 from "../../../../images/eventix05.png"
import img07 from "../../../../images/eventix06.png"
import PiePag from "../../../piePag/Piepag"
import img08 from "../../../../images/eventix07.png"
import img09 from "../../../../images/eventix08.png"
import img10 from "../../../../images/eventix09.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from "@fortawesome/free-solid-svg-icons"

const PF = ()=> {

    return (
        <div style={{backgroundColor: "rgb(49 36 80)"}}>

            <Header ruta={"/proyecto-food"} />

		
			<div className="contenedorPi">

				
				<section >
					<div className="dibidibadidibu">

						<h1 >Eventix</h1>

						<span ><img src={img01} alt="" /></span>

						<p>
							Desarrollo plataforma web para la compra venta de entradas para eventos.  La aplicación se llevó a 
							cabo con cuatro integrantes de forma simultanea, simulando un ambiente laboral y haciendo uso de la
							metodología <b>SCRUM</b>, obteniendo experiencias tanto técnicas como blandas. 
						</p>

						<p>
							Mi participación en el proyecto se ve reflejada en el Back-End.<br></br> 
							-Api Rest, donde se obtenían los eventos desde otra plataforma realizando por web scraping.<br></br> 
							-Filtros combinados.<br></br>
							-Pasarela de pago con criptomonedas a través de Coinbase Commerce.<br></br>
							-Información de los tickets en código QR.-Notificaciones por e-mail de las compra de entradas QR. 
						</p>

						<p>
							Utilizando las siguientes tecnologías:  JavaScript | Node.js | Express | postgresSQL | sequelize | 
							Puppeteer.js | Coinbase-Commers | Qr-code | Node Mailer
						</p>
						
						<p>Tecnologías del proyecto:</p>

						<ul className="contUl">
							
							<div>

								<li className="li">FrontEnd:</li>
								<ul className="ulala">
									<li>React</li>
									<li>Redux</li>
									<li>CSS</li>
									<li>Auth0</li>
									<li>Google Maps</li>
								</ul>
							</div>
							
							<div>

								<li className="li">BackEnd:</li>
								<ul className="ulala">
									<li>Node.js</li>
									<li>Express</li>
									<li>Puppeteer.js</li>
									<li>Coinbase Commerce</li>
									<li>NodeMailer</li>
									<li>Qr Code </li>
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

						<p>Si le interesa conocer mas de la App puede ingresar haciendo click <a href="https://eventix-2-0.vercel.app/" target="_blank">AQUI</a>.<br></br>  Y si le interesa ver el codigo puede ingresar haciendo click <a href="https://github.com/MaxMdr2022/Eventix-2.0" target="_blank">AQUI</a>.</p>
						
						<h3>Video del Proyecto</h3>
                        <div className="video">

                            <ReactPlayer url={"https://vimeo.com/822725794?share=copy"} controls/>
                        </div>

						<div className="video2">
                            <p>Haciendo click en el icono puede visualizar un video del proyecto.</p>
                            <a href="https://vimeo.com/822725794?share=copy" target="_blank"><FontAwesomeIcon  icon={faVideo}/></a>     

                        </div>

                        <h3>Algunas imágenes del proyecto</h3>
                        
                        <p>Inicio de la pagina con sesión iniciada de administrador</p>
                        <span ><img src={img02} alt="" /></span>
                        <p>Filtros combinados para buscar por nombre. Filtrar por fecha, edad, precio y tipo de evento. Y ordenar por orden alfabético. </p>
                        <span ><img src={img03} alt="" /></span>
                        <p>Visualización de los eventos, al hacer hover se ve, ademas del nombre, la fecha y el precio de la entrada. </p>
                        <span ><img src={img04} alt="" /></span>
                        <p>Detalle del evento. Se pueden ver los tipos de entradas, su precio en pesos y en dólares. Y seleccionar la cantidad de entradas. </p>
                        <span ><img src={img05} alt="" /></span>
                        <p>El usuario puede modificar los datos de su perfil. Nombre, apellido, nick, avatar.</p>
                        <span ><img src={img06} alt="" /></span>
                        <p>El formulario para publicar un evento. El usuario tiene que colocar nombre del evento, imagen, fecha, ubicación, tipo de evento, tipo de ticket y precio. </p>
                        <span ><img src={img07} alt="" /></span>
						<p>El usuario puede ver sus eventos publicados y eliminarlos.</p>
                        <span ><img src={img08} alt="" /></span>
						<p>El administrador tiene un panel donde puede ver información de los usuarios como el nombre, apellido, email, si el usuario tiene permisos para se administrador, su avatar y si el usuario fue baneado.</p>
                        <span ><img src={img09} alt="" /></span>
						<p>El administrador puede acceder a mas detalles de la información de los usuarios y modificar la misma. Como también asignar/quitar permisos de administrador a un usuario o banear/quitar el ban. </p>
                        <span ><img src={img10} alt="" /></span>
					</div>
				</section>

			</div>

			<PiePag />

        </div>
    )
}

export default PF