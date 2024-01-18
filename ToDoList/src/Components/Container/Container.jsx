import "./container.css";
import { todolist } from "../../../api/bbdd";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Delete from "../../assets/icons/Delete/Delete";
import Check from "../../assets/icons/Check/Check";
//  import { useState } from "react";

// import Input from "../Input/Input";


export default function Container() {
 
  // const [ tarea , setList ] = useState();

  // function CheckTask() {

  //   if(tarea == true ) {
  //     return(setList("false"))
  //   } else {
  //     return(setList("true"))
  //   }
  // }


 


  return (
    <div className="container">
      <h2>To do List</h2>
      <input placeholder="Inserta una nueva tarea"/>

      {todolist.map((task) => (
        <div
          key={task.id}
          className={todolist.completed ? "completed task" : "uncompleted task"}
        >
          <p>{task.title} </p>
          <div className="icons">
             <Delete />               {/*onClick={DeleteTask(task.id)} */} 
              <Check/> {/* <Check onClick={CheckTask(task.id)} /> */}
          </div>
        </div>
      ))}
    </div>
  );
}
