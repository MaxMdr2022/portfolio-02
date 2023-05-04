import "./piePag.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const PiePag = ()=> {

    return(
        <div className="contenedorFooter">

            <footer >
				<div className="divi">
					
                    <p>&copy; Maximiliano Meder. All rights reserved.</p>
                    <p className="pepe">Design: <a href="https://github.com/MaxMdr2022/portfolio-02" target="_blank"><FontAwesomeIcon icon={faGithub} className="iconPie"/></a></p>
					
				</div>
			</footer>
        </div>
    )
}

export default PiePag