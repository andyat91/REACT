import Buttonimages from "./Button-images"
import { useGalery } from "../context/GaleryContext"


export default function Galeria() {

//Importamos categoria e imagenes de usecontext con al funcion useGalery()
const {categoria,images}=useGalery()

    return(
        <>
        <h1>Galeria Aquí</h1>
        
        
        <h3>Categoria :  {categoria} </h3>
        <p>{images} </p>
        <Buttonimages/>
        </>
    )
}