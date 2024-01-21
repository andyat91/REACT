export default function Form({ onSubmit, actualizarEstado, estado }) {
  //Va actualizando el valor del input
//--------------------------------------------------
  function manejarActualizacion(e) {
    console.log(e.target.value)
    actualizarEstado(e.target.value);
  }
//-------------------------------------------------

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        placeholder="Introduce una nueva tarea"
        onChange={manejarActualizacion}
        value={estado}
      />
    </form>
  );
}
