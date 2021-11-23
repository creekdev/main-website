import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0600",
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
