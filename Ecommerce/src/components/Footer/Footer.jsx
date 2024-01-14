import Facebook from "../../assets/icons/Facebook/Facebook";
import Instagram from "../../assets/icons/Instagram/Instagram";
import Twitch from "../../assets/icons/Twitch/Twitch";
import Youtube from "../../assets/icons/Youtube/Youtube";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="logonav">
          <h3>
            <b>
              <span id="logo">
                <i className="bi bi-globe-americas"></i>
              </span>
              Gluten<span id="logo">Free</span>Andy
            </b>
          </h3>
          <div>
            <div>
              <ul className="menu">
                <li>
                  <a href="https://www.google.es/">Centro de ayuda</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Servicio al consumidor</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Esribenos</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Servicio telefonico</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="menu">
                <li>
                  <a href="/html/politicadeprivacidad.html">Politica de privacidad</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Condiciones de compra</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Opiniones de clientes</a>
                </li>
                <li>
                  <a href="https://www.google.es/">Atención al cliente</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div>
            <h5>Unete a nuestras novedades y recibe ofertas y promociones</h5>
            <div className="onclick">
              <form>
                <input
                  type="email"
                  id="suscripcion"
                  placeholder="introduce tu email"
                  className="input"
                />
              </form>
              <button onClick="suscripcion()" className="btn">
                Suscribirme
              </button>
            </div>
            <form className="check">
              <label htmlFor="email">
                <input type="checkbox" className="check" name="email" />
                Acepto la politica de privacidad de la pagina
              </label>
            </form>
          </div>
          <div className="redes2">
            <h4>Siguenos en redes</h4>
            <ul className="redes">
              <li>
                <Instagram /> Instagram
              </li>
              <li>
                <Facebook /> Facebook
              </li>
              <li>
                <Twitch /> Twitch
              </li>
              <li>
                <Youtube /> Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
