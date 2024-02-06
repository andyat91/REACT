// Construye una galería de imágenes que permita a los usuarios cambiar entre diferentes categorías.
//  Crea un contexto llamado GaleryContext que almacene la categoría actual y la lista de imágenes asociadas a esa categoría.
//  Utiliza useContext para permitir que diferentes componentes accedan y respondan a la galería y la categoría seleccionada.

//1ºImportamos cratecontext,usecontext usestate
import { createContext, useContext, useState } from "react";

//2ºcreamos el contexto con la categoria, las imagenes y la funcion que la maneja
const galeryMode = createContext({
  categoria: "nature",
  images: {},
  manejarCategoria: () => {},
});
//-------------------------------------------------------------------------------------------------------------------------------------------
//3º Galery provider es la funcion que envuelve y retorna el provider y donde va la logica
export function GaleryProvider({ children }) {

//Creeamos un objeto que contiene categorias como claves
  const images = {
    nature: ["image1.jpg", "image2.jpg", "image3.jpg"],
    animals: ["image4.jpg", "image5.jpg", "image6.jpg"],
    architecture: ["image7.jpg", "image8.jpg", "image9.jpg"],
  };
//El Object keys toma el objeto y devuelve un array con las claves ( categorias), en este caso: ['nature', 'animals', 'architecture']
  const categorias = Object.keys(images);
  //4ºUsamos usestate con la categoria actual que es la posicion 0 del array de categorias
  const [actualCategoria, setActualCategoria] = useState(0);

  //-----------------------------------------------------------------
  //funcion que va dentro del create y que maneja el estado(posicion)
//   % categorias.length asegura que el índice se mantenga dentro del rango válido de índices para las categorías.
//    Si actualCategoria es la última categoría, actualCategoria + 1 se volverá 0, creando un bucle circular.
//Esto lo metemos dentro de una nueva variable a la que le pasamos el seteo de usestate
  function manejarCategoria() {
    const siguienteIndex = (actualCategoria + 1) % categorias.length;
    setActualCategoria(siguienteIndex);
  }
   //-----------------------------------------------------------------
   //Creamos un objeto llamado value que le vamos a pasar al provider, tiene lo que tiene el createcontext
   //actualCategoria es el índice que indica la posición de la categoría actual en el array.
   //images[categorias[actualCategoria]] obtiene la lista de imágenes asociadas a la categoría actual.
  const value = {
    categoria: categorias[actualCategoria],
    images: images[categorias[actualCategoria]],
    manejarCategoria: manejarCategoria,
  };
   //-----------------------------------------------------------------
//Return devuelve el provider y el value, recordar poner children
  return( 
                <galeryMode.Provider value={value}>{children}</galeryMode.Provider>
  );
}

//-------------------------------------------------------------------------------------------------------------------------------------------
//Esta funcion acorta la importacion en otros componentes, devuelve el usecontext con el contexto creado
export function useGalery() {
  return useContext(galeryMode);
}
