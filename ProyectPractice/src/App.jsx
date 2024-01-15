import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter/Counter";


function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Vite + React");
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  function handleTitle(e) {
    e.preventDefault();
    setTitle(inputValue);
  }

  /**
   * render 1 ---> count = 0 --> 0 +1
   * render 2 ---> count = 0 --> 0 + 1
   */

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <Counter count={count} setCount={setCount}/>
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <form>
        <input
          placeholder="Cambia el titulo"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button type="submit" onClick={handleTitle}>
          Cambia el titulo!
        </button>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;