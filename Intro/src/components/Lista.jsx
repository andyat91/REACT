//Exportamos la funcion lista con etiqueta users
export default function Lista({users}) {
 
  return (
    <div>
      {/* Ternaria: si hay usuarios funcion con dos parametros, el index y el usuario */}
      {users ? (
        //Users.map es para sacar los elementos del array
        users.map(function (user, index) {
        //Key:Dar indentificacion unica y es mas facil para react renderizar solo los elementos que han cambiado  
          return <p key={index}>{user}</p>;
        })
      ) : (
        <p>No hay usuarios</p>
      )}
    </div>
  );
}


