import { useEffect, useState } from "react"
import { Divider } from "@mui/material"

export default function Home() {
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])
    const [planetSelected, setPlanetSelected] = useState(null)


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

    function setIdPlanet(planetId){
        setPlanetSelected(planetId)
    }

    useEffect(() => {
        async function getCharacters(){
            try{
                if(planetSelected){
                const result = await fetch(`https://dragonball-api.com/api/planets/${planetSelected}`);
                const characters = await result.json()
                console.log(characters)
                setCharacters(characters.characters)
                }
            } catch(error){
                console.log(error)
            }
        }
        getCharacters();
    }, [planetSelected])



    return(
        <>
        <h1>Hola,que tal? Estas en HOME</h1>
        <ul>
            {planets.map((planet) => <li key={planet.id} onClick={() => setIdPlanet(planet.id)}>{planet.name}</li>)}
        </ul>
        <Divider/>
        <ul>
            {characters.map((character) => <li key={character.id}>{character.name}</li>)}
        </ul>
        </>
    )
}