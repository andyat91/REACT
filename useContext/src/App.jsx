
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Login from "./views/Login.jsx/Login";
import Home from "./views/Home.jsx/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Route>
      
   
    </Routes>
    </BrowserRouter>
  );
}
