import { Route, Routes } from "react-router-dom"
import Inicio from "./componentes/inicio/Inicio"
import PI from "./componentes/proyectos/losProyectos/PI/PI"
import PF from "./componentes/proyectos/losProyectos/PF/PF"
import { ScrollRestoration } from "react-router-dom"
function App() {

  return (
    <div>
      
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto-food" element={<PI/>} />
        <Route path="/eventix" element={<PF/>}/>
        
      </Routes>
      <ScrollRestoration />

    </div>
  )
}

export default App
