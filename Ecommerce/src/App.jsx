import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header"
import "./App.css";

import Jumbotron from "./components/Home/Jumbotron";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Maincards from "./components/Home/Maincards";
import "@fontsource/inter";
import MainContenedor from "./components/Main/MainContenedor";
import OpinionsContainer from "./components/OpinionsContainer/OpinionsContainer";
import HeaderMaterial from "./components/HeaderMaterial/HeaderMaterial";
import NavMaterial from "./components/NavMaterial/NavMaterial";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderMaterial />
        <NavMaterial />
        <Jumbotron />
        <Maincards />
        <MainContenedor />
        <OpinionsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
