import { useState, useEffect } from "react";
import "./app.css"

const users = [
  {
    id: 1,
    name: "Pepe",
    score: 5,
  },
  {
    id: 2,
    name: "Paco",
    score: 3,
  },
];

export default function App() {

  const [currentUser, setCurrentUser] = useState(users[0]);

  function onSelectUser(user) {
    setCurrentUser(user);
  }


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ul>
        {users.map((u) => (
          <li onClick={() => onSelectUser(u)} key={u.id}>
            {u.name}
          </li>
        ))}
      </ul>
      <h2>
        Usuario seleccionado: {currentUser.name} {currentUser.score}
      </h2>
      <Score score={currentUser.score} />
    </div>
  );
}


//Hijo  de app viene por props puntuacion y va cambiando
function Score({ score }) {

  // estado de estrellas, setear estado de estrellas = usestate(puntuacion)
  const [stars, setStars] = useState(score);

  // function manejar envio de forumalario: sale una alerta con la cantidad
  function handleSubmit() {
    alert(stars);
  }
  // funcion manejar cambio ( recibe un evento) y dentro setea lo que se va escribiendo
  function handleChange(event) {
    setStars(event.target.value);
  }

  //Useeffect le paso setstart (setear estrellas) con la puntuacion dentro
  //y le digo que el array de dependencias es lo que viene por props que va cambiando

  useEffect(() => {

   setStars(score)
    
  },[score])



  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={stars} onChange={handleChange} />
      <button type="submit">Enviar</button>
      <p>{score}</p>
    </form>
  );
}
