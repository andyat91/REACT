import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header"
import "./App.css"
import Nav from './components/Nav/Nav'
import Jumbotron from './components/Home/Jumbotron'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Maincards from './components/Home/Maincards'
import "@fontsource/inter";
import MainContenedor from './components/Main/MainContenedor'


function App() {


  return (
    <>
    <Header/>
    <Nav/>
    <Jumbotron/>
    <Maincards/>
    <MainContenedor/>
    </>
  )
}

export default App
