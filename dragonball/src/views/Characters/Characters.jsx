import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function Characters() {

    const { id } = useParams();
    
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      try {
          const result = await fetch(
            `https://dragonball-api.com/api/planets/${id}`
          );
          const characters = await result.json();
          
          setCharacters(characters.characters);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  },[id]);

  return (
    <>
      <ul>
        {characters.map((character) => (
          <li key={character.id}><Link to={`/character/${character.id}`}>{character.name}</Link></li>
        ))}
      </ul>
    </>
  );
}
