import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(
    function () {
      console.log(`Tienes ${todos.length} tareas pendientes`);
    },
    [todos]
  );

  function addTodo(newTodo) {
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Nueva Tarea")}>Agregar Tarea</button>
    </div>
  );
}