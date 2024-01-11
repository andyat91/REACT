import "./button-span.css"

export default function Buttonspan() {


    return (
        <a className="btn relative" href="/html/carrito.html" id="carrito">
        <b>
          <i className="bi bi-bag-heart"></i> Carrito
        </b>
        <span id="cantidad">0</span>
      </a>
    )
}