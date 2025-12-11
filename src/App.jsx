import CabeceraCV from "./components/cabeceraCV";
import Perfil from "./components/perfil";
import Experiencia from "./components/experiencia";
import Educacion from "./components/educacion";
import StackTecnologias from "./components/stackTecnologias";
import { cvData } from "./components/data/cvdata"; 

function App() {
  return (
    <div className="cv-container">  
      <CabeceraCV
        nombre={cvData.nombre}
        cargo={cvData.cargo}
        contacto={cvData.contacto}
        foto="@/assets/foto.png"
      />

      <Perfil />
      <StackTecnologias />
      <Experiencia />
      <Educacion />
    </div>
  );
}   
export default App;
