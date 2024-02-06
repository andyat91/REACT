import { useContadorContext } from "../context/ContadorContext"


export default function Boton() {

const { toggleCuenta } = useContadorContext();

    return(
        <button onClick={toggleCuenta}>Boton</button>
    )
}
