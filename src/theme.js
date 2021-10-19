import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: red[900],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
