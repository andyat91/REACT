import ListItem from "../ListItem/ListItem";
import "./list.css"

export default function List({ items, setState }) {
  
  function removeItem(e, id) {
    e.stopPropagation();
    setState(items.filter((item) => item.id !== id));
  }


  function toggleState(index) {
    // Esto es una forma de resetear el array. Se hace una copia, la modificamos y luego la volvemos a crear
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setState(newItems);
  }

  return (
    <ul>
     
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          index={index}
          removeItem={removeItem}
          toggleState={toggleState}
        />
      ))}
    </ul>
  );
}