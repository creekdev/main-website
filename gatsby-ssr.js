const React = require("react");
const { Helmet } = require("react-helmet");
const { ThemeProvider } = require("@mui/material/styles");
const theme = require("./src/theme");
const { CssBaseline } = require("@mui/material");

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment {...props}>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </React.Fragment>
  );
};
