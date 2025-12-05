import CabeceraCV from "./components/cabeceraCV";
import Perfil from "./components/perfil";
import Experiencia from "./components/experiencia";
import Educacion from "./components/educacion";
import StackTecnologias from "./components/stackTecnologias";

function App() {
  return (
    <div className="cv-container">  
      <CabeceraCV />
      <Perfil />
      <StackTecnologias />
      <Experiencia />
      <Educacion />
    </div>
  );
}   
export default App;
