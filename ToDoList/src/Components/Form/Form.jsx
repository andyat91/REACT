export default function Form({ onSubmit, setState, state }) {
    
    function handleChange(e) {
      setState(e.target.value);
    }

    //Formulario tiene 3 props y la funcion onSubmit
    return (
      <form onSubmit={(e) => onSubmit(e)}>
        <input
        //input recibe el valor de la nueva tarea
          value={state}
        //PREGUNTAR
          onChange={handleChange}
          placeholder="Introducir nueva tarea"
        />
      </form>
    );
  }