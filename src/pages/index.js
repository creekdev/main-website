import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";

// import { StaticImage } from "gatsby-plugin-image";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Helmet from "react-helmet";
import { Link } from "gatsby";

const Index = () => {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const sizer = (params) => {
    let result;
    if (xs && params.xs) {
      result = params.xs;
    }
    if (sm && params.sm) {
      result = params.sm;
    }
    if (md && params.md) {
      result = params.md;
    }
    if (lg && params.lg) {
      result = params.lg;
    }
    console.log(result);
    return result;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Creekside Logistics</title>
      </Helmet>
      <Container>
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          sx={{ pt: { xs: 16, md: 28 } }}
        >
          <Stack direction="column">
            <Typography variant="h1" color="text.primary" gutterBottom>
              Go Beyond
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Our sophisticated platform, experienced customer service
              representatives and highly skilled drivers respond swiftly to
              every customer's orders in any capacity.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component="a"
                href="https://wa.me/2347044455667"
                target="_blank"
              >
                Make a delivery
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to="/meet-us#services"
              >
                Find out more
              </Button>
            </Stack>
          </Stack>
          <Stack direction="column" sx={{ width: "100%", px: 2 }}>
            {/* <StaticImage
              src="/brand1.png"
              alt="Go beyond delivery"
              width={sizer({ xs: "90vw", sm: "70vw", md: "50vw", lg: "30vw" })}
              height={sizer({ xs: "90vw", sm: "70vw", md: "50vw", lg: "30vw" })}
            /> */}
            <Avatar
              src="/brand1.png"
              alt="Go beyond delivery"
              variant="square"
              sx={{
                width: { xs: "90vw", sm: "70vw", md: "50vw", lg: "30vw" },
                height: { xs: "90vw", sm: "70vw", md: "50vw", lg: "30vw" },

                mt: { xs: 0, md: -12 },
                mx: "auto",
              }}
            />
          </Stack>
        </Stack>
      </Container>

      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{ py: { xs: 16, md: 28 } }}
        >
          <Box width={1} height="400px">
            {/* <StaticImage
              src="../images/phone.png"
              alt="Phone"
              imgStyle={{
                width: sizer({ xs: "450px", md: "600px" }),
                height: sizer({ xs: "450px", md: "600px" }),
              }}
            /> */}
            <Avatar
              src="/phone.png"
              alt="Phone"
              variant="square"
              sx={{
                width: { xs: "450px", md: "600px" },
                height: { xs: "450px", md: "600px" },
              }}
            />
          </Box>
          <Box width={1}>
            <Typography variant="h2" color="text.primary" gutterBottom>
              Online Tracking <Chip label="Coming Soon" color="primary" />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Track your deliveries across our web platform using our unique
              tracking software, in real-time.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Index;
