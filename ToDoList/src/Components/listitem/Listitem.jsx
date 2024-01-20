import "./listitem.css"

export default function ListItem({ item, removeItem, toggleState, index }) {
  return (
    <li
      onClick={() => toggleState(index)}
      className={`${item.completed ?"completed": "uncompleted"}`}
    >
      {item.title}
      <button  className="button" onClick={(e) => removeItem(e, item.id)}><i className="bi bi-trash"></i></button>
    </li>
  );
}












