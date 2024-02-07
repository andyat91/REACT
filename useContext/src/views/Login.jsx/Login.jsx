import { useState } from "react"
import { useLoginContext } from "../../context/LoginContext"

export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const { handleLogin } = useLoginContext()
    return(
        <>
        <h1>Este es el login</h1>
        <form>
            <input type="text" onChange={(e) =>setEmail(e.target.value)} placeholder="Email"/>
            <input type="text" onChange={(e) =>setPassword(e.target.value)} placeholder="password"/>
            <button onClick={ handleLogin(email,password)}>Enviar</button>
        </form>
        </>
    )
}