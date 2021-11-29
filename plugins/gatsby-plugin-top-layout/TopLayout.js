import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme";
import MyAppBar from "../../src/component/global/MyAppBar";
import MyFooter from "../../src/component/global/MyFooter";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MyAppBar />
        {props.children}
        <MyFooter />
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
