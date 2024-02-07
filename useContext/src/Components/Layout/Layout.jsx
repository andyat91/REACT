import Boton from "../Boton";
import Contador from "../Contador";
import { ContadorProvider } from "../../context/ContadorContext";
import Galeria from "../Galeria"
import { GaleryProvider } from "../../context/GaleryContext";
import { LoginProvider } from "../../context/LoginContext";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <LoginProvider>
      <ContadorProvider>
        <GaleryProvider>
          <div className="App">
            <h1>Hello useContext</h1>
            <Contador />
            <Boton />
          </div>

        <Galeria/>
        <Outlet/>
        </GaleryProvider>
      </ContadorProvider>
    </LoginProvider>
  );
}
