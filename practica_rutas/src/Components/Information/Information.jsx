import { useParams } from "react-router-dom"

export default function Information() {

const {id} = useParams()

    return(
        <h1>Esto :{id}</h1>
    )
}