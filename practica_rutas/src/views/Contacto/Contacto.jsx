import { useNavigate } from "react-router-dom"

export default function Contacto() {

  const navigate = useNavigate();

  function handlenavigate() {

    navigate('/')
  }

    return(
        <>
        <h1>COntacto</h1>
        <button onClick={handlenavigate}>useNavigate</button>
      
        </>
    )
}