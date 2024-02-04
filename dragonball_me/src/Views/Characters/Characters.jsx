import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Characters() {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      try {
        const result = await fetch(
          `https://dragonball-api.com/api/planets/${id}`
        );
        const character = await result.json();
  
        setCharacter(character.characters);
      } catch (error) {
        console.log(error);
      }
    }

    getCharacters();
  }, [id]);

  return (
    <div>
      <h1>Personajes</h1>
      <ul>
        {character.map((character) => (
          <li key={character.id}><Link to={`/character/${character.id} `}> {character.name}</Link> </li>
        ))}
      </ul>
    </div>
  );
}
