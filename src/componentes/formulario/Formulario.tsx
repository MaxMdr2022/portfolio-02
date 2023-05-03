import "./formulario.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Formulario = ()=> {

    return (

        <div className="contenedorForm">

            <div className="formForm">


                <h2>Contacto</h2>
                <p>Contáctame a través de LinkedIn o por email.</p>
                

                <section >
                    <form action="https://formsubmit.co/26a4b04e94cbce697fd4de3bbe3fe440" method="POST">

                        <div className="contInputs">

                            <div className="label" >
                                <label >Nombre</label>
                                <input type="text" name="name" id="name" required title="Ingresa tu nombre" />
                            </div>
                            <div className="label">
                                <label >Email</label>
                                <input type="text" name="email" id="email" required/>
                            </div>
                            <div className="label" id="mensaje">
                                <label >Mensaje</label>
                                <textarea name="message" id="message"  required></textarea>
                            </div>
                        </div>

                        <div className="contenedorBtnEnviar">

                            <div>

                                {<input type="submit" value="Enviar" className="btnEnviar" />}
                                <input type="hidden" name="_next" value="https://portfolio-maximiliano-meder.vercel.app/index.html"/>
                                <input type="hidden" name="_captcha" value="false" />

                            </div>

                        </div>
                            
                        
                    </form>
                </section>


            </div>

            <div className="contenedorRedes">

                <div className="contRedesDiv">

                    <h3>Email</h3>
                    <a href="mailto:maxi_meder94@hotmail.com"><FontAwesomeIcon className="icono" icon={faEnvelope} /></a>
                
                
                
                    <h3>Redes</h3>
                    
                    {/*<a href="https://twitter.com/home" ><span >Twitter</span></a>*/}
                    
                    <a href="https://github.com/MaxMdr2022" ><span ><FontAwesomeIcon className="icono" icon={faGithub} /></span></a>
                    <a href="https://www.linkedin.com/in/maximiliano-meder-618566258/" ><span ><FontAwesomeIcon className="iconoIn" icon={faLinkedinIn} /></span></a>

                </div>
                        
                        
            </div>
            
        </div>
    )
}

export default Formulario