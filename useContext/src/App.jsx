// import Boton from "./Components/Boton";
// import Contador from "./Components/Contador";
// import { ContadorProvider } from "./context/ContadorContext";
import Galeria from "../../practica_rutas/src/Components/Galeria/Galeria";
import { GaleryProvider } from "./context/GaleryContext";



export default function App() {
  return (
    // <ContadorProvider>
    //   <div className="App">
    //     <h1>Hello useContext</h1>
    //    <Contador/>
    //    <Boton/>
    //   </div>
    // </ContadorProvider>

    <GaleryProvider>
      <Galeria/>

    </GaleryProvider>
  );
}
