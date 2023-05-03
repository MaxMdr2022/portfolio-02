import "./quienSoy.css"
import CV from "../../CV/CV Maximiliano Meder.pdf"
export default function QuienSoy () {


    return (

        <div>
            <section  >
                    <div className="contenedorQienSoy">
                        <h1>Hola, Soy Maxi, <span >FullStack Web Developer</span></h1>
                        <p>Soy un desarrollador Fullstack Web. Me destaco por ser una persona muy creativa y curiosa, comprometida con mi profesión y con la gente que me rodea.</p>
                        <p>Poseo gran iniciativa al trabajo en equipo, adoptando una postura colaborativa.</p>
                        <p>Comencé mi camino IT aprendiendo programación y desarrollo de software en el Bootcamp de Desarrollo Web Full Stack que dicta SoyHenry donde pasé +900 horas incorporando conceptos teóricos y prácticos:</p>
                        <ul>
                            <li>Programación estructurada, funcional y orientada a objetos.</li>
                            <li>Programación asíncrona y consumo de APIs y APIs Rest.</li>
                            <li>Estándares y uso de ECMAScript 6 para la interpretación de los navegadores.</li>
                            <li>Manejo de paquetes con npm y webpack.</li>
                            <li>Manipulación del DOM y creación de web components.</li>
                            <li>Estilización con CSS y styled-components.</li>
                            <li>Uso de distintos frameworks y tecnologías: ReactJS, Redux, ExpressJS, Sequelize etc.</li>
                            <li>Desarrollo colaborativo y manejo de control de versiones con Git.</li>	
                        </ul>
                        <p>Pude aplicar estos conocimientos en un proyecto individual y uno grupal.</p>
                        <p>Actualmente me encuentro reforzando conceptos y empezando pequeños proyectos personales a medida que aprendo nuevas tecnologías. Estoy aprendiendo de forma autodidacta TypeScript, Mongodb.</p>
                        <p>Busco integrarme a un equipo en el que pueda aprender de sus aptitudes. Y donde pueda aportar mis conocimientos para generar mejoras.</p>

                        <h3>Lenguajes y Herramientas: </h3>

                        <h4 >Back-End</h4>

                        <p> 
                        
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                                <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://pptr.dev/" target="_blank" rel="noreferrer"> 
                                <img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" alt="puppeteer" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://sequelize.org/" target="_blank" rel="noreferrer"> 
                                <img src="https://google.github.io/sqlcommenter/images/sequelize-logo.png" alt="sequelize" width="40" height="40"/> 
                            </a>
                        
                        </p>

                        <h4 >Front-End</h4>

                        <p>

                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://redux.js.org" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
                            </a>
                            
                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
                            </a> 
                        </p>



                        <p>Si te interesa conocer mas de mi y de mis proyectos, puedes ingrersar a mi  <a href="https://www.linkedin.com/in/maximiliano-meder-618566258/" className="a">LinkedIn</a><br />
                        y a mi <a href="https://github.com/MaxMdr2022"  className="a" >GitHub</a>.  Mi <a href={CV} download="CV-Maximiliano-Meder" className="a">CV</a>.</p>
                      
                    </div>
                </section>
        </div>
    )
};