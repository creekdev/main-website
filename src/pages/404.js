import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "gatsby";

const Page404 = () => {
  return (
    <Stack p={4}>
      <Container>
        <Stack
          py={20}
          spacing={2}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
        >
          <div>
            <Typography variant="h2" color="primary" gutterBottom>
              This page is not found
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              This page is missing or propably didn't exist in the first place.
              Click the button below to return to the home page.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              component={Link}
              to="/"
            >
              Go to homepage
            </Button>
          </div>
          <Avatar
            variant="square"
            alt="404 page"
            src="/carton-boxes.png"
            sx={{
              height: { xs: 300, lg: 400 },
              width: { xs: (300 * 3803) / 2707, lg: (400 * 3803) / 2707 },
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Page404;
