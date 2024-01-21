
import { useState } from 'react'
import './App.css'

function App() {

  const [coin,setearCoin] = useState();

function tirarMoneda() {
  
  const number = Math.random();
  console.log(number);

  setearCoin(number>0.5?"Cara":"Cruz");
}

  return (
    <>
     <h1>Flip a Coin</h1>
     <button onClick={tirarMoneda}/>Tirar
     {console.log(coin)}
     <h1>{coin} </h1>
    </>
  )
}

export default App
