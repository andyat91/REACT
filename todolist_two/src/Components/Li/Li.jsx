import "./li.css"

export default function Li({item, manejarEstado, index, borrarTarea }) {


    return(
        <li
        onClick={() => manejarEstado(index)}
        className={item.completed?"completed":"uncompleted"}
         >{item.title}
         <button onClick={(e) => borrarTarea(e,item.id)} >X</button>
         </li>
    )
}