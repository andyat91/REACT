// Crea un tema oscuro y un tema claro en su aplicación utilizando useContext. 
// Proporcione un interruptor que permita a los usuarios cambiar entre los dos temas. 
// Asegúrese de que todos los componentes de la aplicación respondan al tema seleccionado.

//Importamos el createcontext, el usecontext
import {
    createContext,
    useState,
    useContext,
    useMemo,
    useCallback
  } from "react";
  
  //Crea el contexto con los valores y una funcion vacia
  const UiModeContext = createContext({
    uiMode: "light",
    toggleUiMode: () => {}
  });
  //Exportamos el createcontext
  export default UiModeContext;
  
  //Creamos la funcion PROVIDER que contiene el return y la logica
  export function UiModeContextProvider({ children }) {

    //useState con el estado por defecto en light
    const [uiMode, setUiMode] = useState("light");
    
    //FUNCION DEL CREATE CONTEXT
    const toggleUiMode = useCallback(() => {
      //Seteo funcion dentro con el estadoactual del modo, si es igual a light return dark y viceversa
      setUiMode(function (oldUiMode) {
        if (oldUiMode === "light") {
          return "dark";
        } else {
          return "light";
        }
      });
    }, []);
  
    //VALUE: mete dentro {uiMode:uiMode,
                        //toggleUiMode:toggleUiMode}
    const value = useMemo(
      () => ({
        uiMode,
        toggleUiMode
      }),
      [uiMode, toggleUiMode]
    );
  //Devolvemos la funcion que envuelve para utilizarla en app dentro le metemos los dos valores (VALUE) y le decimos que lo que haya dentro son hijos
    return (
      <UiModeContext.Provider value={value}>{children}</UiModeContext.Provider>
    );
  }
  //exportamos funcion que nos ahorra tener que pasar uiMode y toggleUiMode, pasando solo el use context
  export function useUiModeContext() {
    return useContext(UiModeContext);
  }
  