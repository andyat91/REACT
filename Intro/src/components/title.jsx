export default function Title({ name }) {
  return (
    <div>
      {name  ? (
        name.map(function (name, index) {
          return <p key={index}>
              Mi nombre es {name} y mi apellido es Chocolatero
            </p>  
        })
      ) : (
        <p>No hay Name</p>
      )};
    </div>
  );
}
