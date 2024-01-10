//Importamos titulo que viene de otro componenete
import Title from "./title";
//Importamos lista que viene de otro componente
import Lista from "./Lista";

function Card2() {

  //Creamos un array de strings que es la lista
  const users= ["paco","javi","Damian"];
 
  
   return( <div className="tarjeta">
      <Title name={users} />
      <img
        className="foto"
        src="https://media.istockphoto.com/id/1283828493/es/vector/joven-%C3%A1rabe-chica-cara-avatar-peque%C3%B1o-ni%C3%B1o-mujer-dibujo-animado-personaje-retrato.jpg?s=612x612&w=0&k=20&c=K2iWvJlKrr9uc3hbKspn_ek-g7eDMVtPBHBYcJVqnZc="
      />
      <Title name={users} />

      <Lista users={users}/>
    </div>);
  }
  export default Card2;