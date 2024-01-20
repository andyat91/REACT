import {
  ThemeProvider,
  CssBaseline,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { darkTheme } from "./theme/DarkMode";
import "./App.css";
import { Switch } from "./Components/Switch/Switch";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = darkTheme(isDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    {/* Tema creado en darkmode.js y exportado para que aplique */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main">
          <Paper elevation={3} sx={{ p: 4, textAlign: "Center" }}>
            <Typography variant="h3" color="primary">
              {isDarkMode ? "Modo Dark" : "Modo Light"}
            </Typography>
            <Switch chequed={isDarkMode} onChange={toggleDarkMode} />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
