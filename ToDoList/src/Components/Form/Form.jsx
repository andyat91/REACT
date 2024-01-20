import "./form.css";

//function que recibe tres props el enviar, manejar cambio y tarea
export default function Form({ onSubmit, setState, state }) {
  function handleChange(e) {
    //Va actualizando el valor de entrada mientras se escribe en el input
    setState(e.target.value);
  }

  //Formulario tiene 3 props y la funcion onSubmit
  return (
    //Prop 1: Callback con el evento que activa en todos.jsx la funcion manejar submit(insertar)
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        //input recibe el valor de la nueva tarea
        value={state}
        onChange={handleChange} // SOlo sirve para actualizar valor de entrada en el input
        placeholder="Introducir nueva tarea"
      />
    </form>
  );
}
