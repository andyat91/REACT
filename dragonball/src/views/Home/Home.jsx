import { useEffect, useState } from "react"
import { Divider } from "@mui/material"
import { Link } from "react-router-dom"

export default function Home() {
    const [planets, setPlanets] = useState([])
    


    useEffect(() => {
        async function getPlanets(){
            try{
                const result = await fetch('https://dragonball-api.com/api/planets');
                const planets = await result.json()
                setPlanets(planets.items)
            } catch(error){
                console.log(error)
            }
        }
        getPlanets();
    }, [])



    return(
        <>
        <h1>Hola,que tal? Estas en HOME</h1>
        <ul>
            {planets.map((planet) => <li key={planet.id} ><Link to={`planet/${planet.id}`}>{planet.name}</Link></li>)}
        </ul>
        <Divider/>
        </>
    )
}