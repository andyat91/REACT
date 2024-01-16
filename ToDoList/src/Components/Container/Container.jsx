import "./container.css";
import { todolist } from "../../../bbdd";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Delete from "../../assets/icons/Delete/Delete"
import Check from "../../assets/icons/Check/Check"

// import Input from "../Input/Input";

export default function Container() {
  return (
    <div className="container">
      <h2>To do List</h2>
      {todolist.map((list) => (
        <div key={list.id} className={list.completed ? "completed task" : "uncompleted task"}>
          <p >
            {list.title}{" "}
          </p>
          <div className="icons">
          <Delete className="delete"/>
          <Check className="check"/>
          </div>
        </div>
      ))}
    </div>
  );
}
