import logook from "../../assets/images/logoOK.png"
import "./Header.css"

export default function Header() {

  return(
    <div className="headercontainer">
      <h1>DragonBall</h1>
      <form>
        <input type="sumbit" placeholder="buscar"/>
      </form>
      <img src={logook}/>
    </div>
  )
}