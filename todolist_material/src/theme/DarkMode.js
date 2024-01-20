import { createTheme } from "@mui/material/styles";
import { yellow, purple } from "@mui/material/colors";

export const darkTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: darkMode ? yellow : purple,
      secondary: yellow,
    },
  });
