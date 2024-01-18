import Form from "../../components/Form/Form";
import List from "../../Components/list/list";
import {todolist} from "../../../api/bbdd"
import "./todos.css"

//Importar useState from react
import { useState } from "react";

//Exportar todo list
export default function Todos() {

    //Metemos en un array la tarea y la funcion para cambiarla y le decimos que la coja de todolist metodo useState
  const [todos, setTodos] = useState(todolist);

    //Metemos en un array la nueva tarea y la funcion para manejar la nueva tarea
  const [newTodoTitle, setNewTodoTitle] = useState("");

  //Creamos la funcion manejar envio, parametro evento
  function handlSubmit(e) {
    //Le tenemos que decir que el evento no realice acciones por defecto
    e.preventDefault();

    //Creamos una nueva variable con la estructura del array donde tenemos las tareas
    const newTodo = {
    //Crea un nuevo id que devuelve el numero de milisegundos desde 1 enero de 1970 creando un numero unico
      id: new Date().getTime(),
    //Titulo nuevo : tarea nueva
      title: newTodoTitle,
      //Completed falso porque se da por hecho que la tarea no esta realizada
      completed: false,
    };
    // Se utiliza la funcion setTodos con el parametro actual tarea y se mete en el array que muestra react la nueva tarea y las antiguas tareas para que muestre todas
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    //PREGUNTAR
    setNewTodoTitle("");
  }




  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form
      //<Proiedad para enviar un formulario con la funcion manejar formulario dentro
        onSubmit={handlSubmit}
        //Manejo del state de la nueva tarea  con la funcion manejar nueva tarea
        setState={setNewTodoTitle}
        //valor : nueva tarea
        state={newTodoTitle}
      />
      {/* Mostrar nueva tarea */}
     
      <List items={todos} setState={setTodos} />
    </div>
  );
}