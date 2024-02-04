import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import Home from './views/Home/Home'
import Blog from './views/Blog/Blog'
import Contacto from './views/Contacto/Contacto'
import Inicio from './views/Inicio/Inicio'
import Dashboard from './views/Dashboard/Dashboard'
import Overview from './views/Dashboard/overview'
import Star from './views/Dashboard/stars'
import Research from './views/Blog/Research'
import NotFound from './Components/NotFound/NotFound'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="blog" element={<Blog/>} >
              <Route path=":id" element={<Research/>}/>
            </Route>
            <Route path="contacto" element={<Contacto/>} />
            <Route path="inicio" element={<Inicio/>} />
            <Route path="dashboard" element={<Dashboard/> } >
              <Route path="overview" element={<Overview/>} />
              <Route path="stars" element={<Star/>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
