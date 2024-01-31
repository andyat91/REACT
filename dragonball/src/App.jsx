import "./App.css";
import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./views/Characters/Characters";
import Character from "./views/Character/Character";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="planet/:id" element={<Characters/>}/>
          <Route path="character/:id" element={<Character/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
