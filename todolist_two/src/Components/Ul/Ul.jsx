import Li from "../Li/Li";

export default function Ul({ tareas }) {

    return(
        <ul>
            {tareas.map((item) => (
                <Li 
                    key={item.id}
                    item={item} />
            ))}
            
        </ul>
    )
}