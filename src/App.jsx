import CabeceraCV from "./components/cabeceraCV";
import Perfil from "./components/perfil";
import Experiencia from "./components/experiencia";
import Educacion from "./components/educacion";

function App() {
  return (
    <div className="cv-container">  
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}   
export default App;
