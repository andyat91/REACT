import Star from "../../assets/icons/Star/Star";
import "./valoracion.css";

export default function Valoracion() {
  //...rest de propiedades nativas dentro de donde se esté utilizanado

  return (
    <div className="cajadescripcion">
      <p>
        El precio esta bien algo más barato que en los centros comerciales, este
        pan es mucho mejor que otras marcas y el precio es más barato o igual:
        Recomiendo su compra. A ver si de una vez los politicos tienen en cuenta
        a las personas con celiaquía y bajan el IVA de estos productos.
      </p>
      <div className="estrellas">
        <h5>Maricarmen Sanchez</h5>
        <span>
          <Star />
          <Star />
          <Star />
        </span>
          <Star />
          <Star />
      </div>
    </div>
  );
}
