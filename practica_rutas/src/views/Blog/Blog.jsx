
import { Link, Outlet, useParams , useNavigate } from "react-router-dom";
import Information from "../../Components/Information/Information";

export default function Blog() {
    
    const navigate = useNavigate();
    const {id} = useParams();
    
    function changeNavigate() {
        if(id === '5') {
            navigate('/')
        } else {
            navigate('/contacto')
        }
        
        }
        

    return(

        <>
        <h2>Este es el blog</h2>
        <button onClick={()=>changeNavigate()}>ChangeNavigate</button>
        <Link to="5">Link to research</Link>
        <Outlet/>
        <Information/>
        </>
    )
}