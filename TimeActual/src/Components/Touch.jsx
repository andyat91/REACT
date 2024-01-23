// 3ºCrea un componente que use useEffect para suscribirse a un evento de teclado y muestre la tecla presionada en la pantalla.

import { useEffect, useState } from "react";

export default function Touch() {
  const [tecla, setTecla] = useState("");

  //-------------------------useEffect-------------------------------------------------------
  //useffect funcion, dentro creamos la funcion manejarTecla y le pasamos el evento por parametro.
  //
  useEffect(() => {
    const manejarTecla = (event) => {
  // event.key propiedad de evento que nos guarda QUE letra se esta presionando
  //Setear tecla
      const tecla = event.key;
      setTecla(tecla);
    };
//Esto escucha cuando estamos presionando alguna tecla y le pasamos la funcion manejar tecla
    window.addEventListener("keydown", manejarTecla);
  }, []);
//-------------------------Return-------------------------------------------------------------
  return (
    <div>
      <h1>Tecla Presionada</h1>
      <h3>Pulsa una tecla y veras la tecla presionada aqui: {tecla} </h3>
      <input type="text" value={tecla} readOnly />
    </div>
  );
}
