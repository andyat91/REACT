export default function Lista({users}) {
 
  return (
    <div>
      {users ? (
        users.map(function (user, index) {
          
          return <p key={index}>{user}</p>;
        })
      ) : (
        <p>No hay usuarios</p>
      )}
    </div>
  );
}

{
  /* <div>
{users ? (
users.map(function (user, index) {
 const userWithUpperCase = user.toUpperCase();
 return <p key={index}>{userWithUpperCase}</p>;
})
) : (
<p>No hay usuarios</p>
)}
</div> */
}
