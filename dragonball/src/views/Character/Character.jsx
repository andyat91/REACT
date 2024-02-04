import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function getCharacter() {
      try {
        const result = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        const character = await result.json();
        setCharacter(character);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacter();
  }, [id]);

  return (
    <>
      {character ? (
        <div>
          <div>
            <h1>Name: {character.name}</h1>
          </div>
          <div>
            <div>
              <img src={character.image}></img>
            </div>
            <div>
              <p>Ki: {character.ki}</p>
              <p>Max ki: {character.maxKi}</p>
              <p>Race: {character.race}</p>
              <p>Gender: {character.gender}</p>
              <p>Description: {character.description}</p>
              <p>Affiliation: {character.affiliation}</p>
              <p>Origin Planet: {character.originPlanet.name}</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>{}</div>
          </div>
        </div>
      ) : (
        <h2>No hay personajes</h2>
      )}
    </>
  );
}
