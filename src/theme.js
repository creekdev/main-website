import red from "@mui/material/colors/red";
import createTheme from "@mui/material/styles/createTheme";

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
  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;
