import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Planets() {

    const [planets, setPlanets] = useState([]);

useEffect(() => {

    async function getPlanets() {

    try{
        const result = await fetch('https://dragonball-api.com/api/planets');
        const planets = await result.json();
        console.log(planets)
        setPlanets(planets.items);
        
    }catch(error) {
        console.log(error)
    }
    }
    getPlanets();
},[]);

    return(
        <>
        <h1>Planets</h1>
        <ul>
            {planets.map((planet) => <li key={planet.id} ><Link to={`planet/${planet.id} `}>{planet.name}</Link>  </li>)}
            
        </ul>
        </>
    )
}