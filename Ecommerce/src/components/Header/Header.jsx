import "./Header.css";





export default function Header() {
  return (
    <div>
      <header className="wrap">
        <div className="index-login">
          <h3>
            <b>
              <span id="logo">
                <i className="bi bi-globe-americas"></i>
              </span>
              Gluten<span id="logo">Free</span>Andy
            </b>
          </h3>
          <form>
            <input
              type="search"
              className="input"
              id="buscador"
              placeholder="busca tu producto"
            />
          </form>
          <a className="btn relative" href="/html/carrito.html" id="carrito">
            <b>
              <i className="bi bi-bag-heart"></i> Carrito
            </b>
            <span id="cantidad">0</span>
          </a>
        </div>
      </header>
    </div>
  );
}
