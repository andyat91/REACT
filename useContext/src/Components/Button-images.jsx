import { useGalery } from "../context/GaleryContext"

//Creamos un componente boton donde importamos la funcion manejarcategoria de gelerycontext

export default function Buttonimages() {

const {manejarCategoria} = useGalery();
//hay que ponerla en callback para que no se ejecute todo el rato
    return(
        <button onClick={() => manejarCategoria()}>Cambiar de categoria</button>
    )
}