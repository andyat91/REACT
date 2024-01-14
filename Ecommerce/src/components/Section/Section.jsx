import "./section.css"
import Creditcard from "../../assets/icons/Creditcard/Creditcard";
import PiggyBank from "../../assets/icons/PiggyBank/PiggyBank";
import Location from "../../assets/icons/Location/Location";
import Truck from "../../assets/icons/Truck/Truck";


export default function Section() {

    return(
        <section className="wrap garantia">

      <div>
        <h1><Creditcard/> </h1>
        <div>
          <h5>Pago Seguro</h5>
          <h6>100 por 100 Garantizado</h6>
        </div>
      </div>
      <div>
        <h1> <Truck/> </h1>
        <div>
          <h5>Envio Gratis</h5>
          <h6>En pedidos de mas de 20€</h6>
        </div>
      </div>
      <div>
        <h1><Location/></h1>
        <div>
          <h5>Local</h5>
          <h6>Bajos en azucar</h6>
        </div>
      </div>
      <div>
        <h1><PiggyBank/></h1>
        <div>
          <h5>Ofertas unicas</h5>
          <h6>100 por 100 Garantizado</h6>
        </div>
      </div>

    </section> 
    )
}