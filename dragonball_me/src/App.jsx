
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Planets from './Views/Planets/Planets'
import Characters from './Views/Characters/Characters'
import Character from './Views/Character/Character'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Planets/>}/>
          <Route path="planet/:id" element={<Characters/>} />
          <Route path="character/:id" element={<Character/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
