import "./listitem.css"

export default function ListItem({ item, removeItem, toggleState, index }) {
  return (
    <li
      onClick={() => toggleState(index)}
      className={`${item.completed && "completed"}`}
    >
      {item.title}
      <button onClick={(e) => removeItem(e, item.id)}>X</button>
    </li>
  );
}












