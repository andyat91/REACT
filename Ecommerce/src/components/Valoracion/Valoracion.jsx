import "./valoracion.css";
import reviews from "../../bbdd/reviews";

export default function Valoracion() {
//...rest de propiedades nativas dentro de donde se esté utilizanado
    const valoraciones = 0;
  return (
    <div className="caja caja-destacada" id="valoracionescaja">
      <button onClick={Valoracion(valoraciones-1)} className="btn hidden">
        <i className="bi bi-arrow-left hidden"></i>
      </button>
      <div>
        <h5 className="opinionesdestacadas">Opiniones destacadas</h5>
        <p id="valoracionText">{reviews[valoraciones].descripcion} </p>

        <h5>${reviews[valoraciones].usuario}</h5>
        <div className="valoracion">
        
          <i className="bi bi-star"></i>
         
        </div>
      </div>
      <button onClick="valoraciones(${valoracion+1})" className="btn">
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
}
