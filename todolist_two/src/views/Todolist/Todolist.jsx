
import Form from "../../Components/Form/Form";
import Ul from "../../Components/Ul/Ul";
import { listBBDD } from "../../../api/bbdd"
import { useState } from "react";



export default function Todolist() {

    const [tareas,setearTarea] = useState(listBBDD);
    const [ nuevaTarea,setearNuevaTarea ] = useState("")

//------------------------------------------------------------Funcion Manejar tarea
const manejarTarea = function (e) {

    e.preventDefault();

    const newTareaObj = {

        id: new Date().getTime(),
        title: nuevaTarea,
        completed: false 
    }
console.log(nuevaTarea)
    setearTarea((tareasyaexistentes) => [newTareaObj,...tareasyaexistentes]);
    setearNuevaTarea("");
}

//----------------------------------------------------------------------------Return

    return(

        <div>
            <h1>To do List</h1>
            <Form
            onSubmit={manejarTarea}
            actualizarEstado= {setearNuevaTarea}
            estado={nuevaTarea}
             />
            <Ul tareas={tareas}
                 />
        </div>
    )
}
