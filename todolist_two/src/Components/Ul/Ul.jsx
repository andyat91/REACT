import Li from "../Li/Li";

export default function Ul({ tareas, setearTarea }) {

//-------------------------------------------------------------------------
function manejarEstado(index) {
    console.log(index)
    const nuevaTarea = [...tareas];
    nuevaTarea[index].completed = !nuevaTarea[index].completed;

    setearTarea(nuevaTarea);
}
//-------------------------------------------------------------------------
function borrarTarea(e,id) {
e.stopPropagation();

setearTarea(tareas.filter((tarea) => ( id !== tarea.id)));

}
    return(
        <ul>
            {tareas.map((item, index) => (
                <Li 
                    key={item.id}
                    item={item}
                    index={index}
                    manejarEstado={manejarEstado} 
                    borrarTarea={borrarTarea} />
            ))}
            
        </ul>
    )
}