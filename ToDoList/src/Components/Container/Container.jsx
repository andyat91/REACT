
import { todolist } from "../../../bbdd";
// import Input from "../Input/Input";

export default function Container() {

return (

    <div>
    {todolist.map(list => 
    
        <p key={list.id}>{list.title}{list.completed}</p>
    
        )}


    </div>
)
}