import { useState } from 'react'
import { Link} from 'react-router-dom'
import Notificaciones from '../../Components/Notificaciones/Notificaciones';
import Configuracion from '../../Components/Configuraciones/Configuracion';

export default function Dashboard() {

    const [notificacion,setNotificacion] = useState(false);
    const [configuracion,setConfiguracion] = useState(false)
   
  
   

    function handleNotificacion() {
        setNotificacion(true)
        
    }
    function handleConfiguracion() {
        setConfiguracion(true)
    }


  


    return(
        <>
        <h1>Holi soy el dashboard</h1>
        <ul>
            <li>
                <Link to="overview">Overview</Link>
            </li>
            <li>
                <Link to="stars">Stats</Link>
            </li>
        </ul>

      
        <button onClick={()=> handleNotificacion()}>Notificaciones</button>
        <button onClick={()=> handleConfiguracion()} >Configuración</button>

        {notificacion && (
            <div>
                <Notificaciones/>
                
            </div>
        )}
            {configuracion && (
            <div>
                <Configuracion/>
            </div>
        )}
        
        </>
    )
}