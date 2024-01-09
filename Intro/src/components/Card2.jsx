import Title from "./title";
import Lista from "./Lista";

function Card2() {

  const users= ["paco","javi","Damian"];
   return( <div className="tarjeta">
      <Title name="Christopher" lastname="Nolan"/>
      <img
        className="foto"
        src="https://media.istockphoto.com/id/1283828493/es/vector/joven-%C3%A1rabe-chica-cara-avatar-peque%C3%B1o-ni%C3%B1o-mujer-dibujo-animado-personaje-retrato.jpg?s=612x612&w=0&k=20&c=K2iWvJlKrr9uc3hbKspn_ek-g7eDMVtPBHBYcJVqnZc="
      />
      <Title name="Christopher" lastname="Nolan"/>

      <Lista users={users}/>
    </div>);
  }
  export default Card2;