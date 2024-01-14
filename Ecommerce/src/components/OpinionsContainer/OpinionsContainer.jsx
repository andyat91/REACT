import "./opinionscontainer.css"
import Opinions from "../Opinions/Opinions"
import Valoracion from "../Valoracion/Valoracion"

export default function OpinionsContainer() {

   return(
    <div className="opiniones wrap">
     <Opinions/>
     <Valoracion/>
     
  </div>
   ) 
}