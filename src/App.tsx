import { Route, Routes } from "react-router-dom"
import Inicio from "./componentes/inicio/Inicio"
import PI from "./componentes/proyectos/losProyectos/PI/PI"
import PF from "./componentes/proyectos/losProyectos/PF/PF"
import ScrollToTop from './componentes/scrollToTop/scrollToTop.tsx'
// import { BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom"

function App() {

  return (
    <div>
      
      <HashRouter>
      
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyecto-food" element={<PI/>} />
          <Route path="/eventix" element={<PF/>}/>
          
        </Routes>
        
      
      </HashRouter>

    </div>
  )
}

export default App
