import Loginspan from "../login-span/Loginspan";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div>
          <ul>
            <li>
              <a href="/index.html">Todos los productos</a>
            </li>
            <li>
              <a href="https://www.google.es/">Sobre Nosotros</a>
            </li>
            <li>
              <a href="https://www.google.es/">Contacto</a>
            </li>
            <li>
              <a href="https://singluten.malaga.eu/">Málaga sin gluten</a>
            </li>
            <li>
              <a href="https://www.google.es/">Ofertas</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Loginspan />
          </ul>
        </div>
      </div>
    </nav>
  );
}
