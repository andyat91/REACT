import { useState } from "react";
import { useEffect } from "react";

export default function Hour () {

    const [hour, setHour] = useState(new Date());
    //---------------------------UseEffect--------------------------------------
    
    //useEffect es un callback que dentro crea una funcion que actualiza cada los milisegundos que queramos
    //la funcion setInterval tiene el seteo de la fecha(useState) cada 1000.
    //El return tiene clearInterval con la variable creada
    //useEffect tiene un array vacio de dependencias que dice que solo se ejecute una vez

    //QUEDA FORMATEAR LA HORA A SOLO DOS DIGITOS
    
      useEffect(() => {
        
        const interval = setInterval(() => {
          setHour(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

//Recibe por props la hora y lo pasa a string porque sino sale [object,object]

    return(

        <h1>{hour.toString()} </h1>
      
    )
}