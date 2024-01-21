import Form from "../../components/Form/Form";
import List from "../../Components/list/list";
import { todolist } from "../../../api/bbdd";
import "./todos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/ma-shan-zheng";

import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState(todolist);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  const [darkMode, setToggleDarkMode] = useState(false);

  const ToggleDarkMode = () => {
    setToggleDarkMode(!darkMode);
  };

  function handlSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),

      title: newTodoTitle,

      completed: false,
    };

    setTodos((Todos) => [newTodo, ...Todos]);

    setNewTodoTitle("");
  }

  return (
    <div className={darkMode ? "dark container" : "light container"}>
      <h1 className="title">To do List</h1>

      <Form
        onSubmit={handlSubmit}
        setState={setNewTodoTitle}
        state={newTodoTitle}
      />

      <List items={todos} setState={setTodos} />
      
      <button onClick={ToggleDarkMode}>
        {darkMode ? (
          <i className="bi bi-brightness-high">LightMode</i>
        ) : (
          <i className="bi bi-moon">DarkMode</i>
        )}
      </button>
    </div>
  );
}
