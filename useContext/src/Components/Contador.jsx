import { useContadorContext } from "../context/ContadorContext"



export default function Contador() {

const { cuenta } = useContadorContext();

    return(
        <h1>Contador en:{cuenta}</h1>
    )
}