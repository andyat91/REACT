import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header"
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Home/Jumbotron";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Maincards from "./components/Home/Maincards";
import "@fontsource/inter";
import MainContenedor from "./components/Main/MainContenedor";
import OpinionsContainer from "./components/OpinionsContainer/OpinionsContainer";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Jumbotron />
      <Maincards />
      <MainContenedor />
      <OpinionsContainer />
      <Section/>
      <Footer/>
    </>
  );
}

export default App;
