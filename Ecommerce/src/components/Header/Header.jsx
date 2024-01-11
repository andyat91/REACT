import "./Header.css";
import Buttonspan from "../button-span/button-span";




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
        <Buttonspan/>
        </div>
      </header>
    </div>
  );
}
