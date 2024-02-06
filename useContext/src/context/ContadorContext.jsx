// Crea una aplicación que tenga un contador en un componente y un botón en otro componente. 
//tilice useContext para compartir el valor del contador entre los dos componentes. Cuando se haga clic en el botón,
// el valor del contador debe aumentar en uno.


//1º importamos de react
import {
    createContext,
    useState,
    useContext
  } from "react";

  //2º Creamos el contexto: en este caso la cuenta en 0 y lafuncion vacia
  const contadorMode = createContext ({
    cuenta:0,
    toggleCuenta: () => {}
  })
//3º Exportamos el create
  export default contadorMode;

  //Creamos el provider con el return y la logica
  export function ContadorProvider ({children}) {

    //4ºUseState a 0
    const [cuenta,setCuenta] = useState(0);

    //5º Funcion del CREATE: cuenta +1
    function toggleCuenta() {
        setCuenta((currentCuenta) => {
           return currentCuenta + 1
        })
    }

//6º metemos los valores en value
    const value= {
        cuenta,
        toggleCuenta,
    };
//7º Devolvemos el provider
    return(

        <contadorMode.Provider value={value}>{children}</contadorMode.Provider>
    )
  }
// 8º Esta funcion exporta el create con los datos metidos con logica
  export function useContadorContext() {
    return useContext(contadorMode);
  }