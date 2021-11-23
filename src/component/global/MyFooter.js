import React from "react";
import {
  Box,
  Container,
  Stack,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";

import menuItems from "../utils/getMenus";
import { Link } from "gatsby";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const socials = [
  { icon: "", link: "" },
  { icon: "", link: "" },
  { icon: "", link: "" },
];

const MyFooter = () => {
  const MyMenuItem = ({ name, link }) => (
    <ListItem button component={Link} to={link}>
      <ListItemText
        primary={
          <Typography variant="body1" color="inherit">
            {name}
          </Typography>
        }
      />
    </ListItem>
  );

  return (
    <Box
      sx={{
        background:
          "radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px",
        bgcolor: "#252222",
        backgroundSize: "16px 16px",
        color: "#ffffff99",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          sx={{ py: 8 }}
        >
          <Box width={1}>
            <Avatar
              src="/splash.png"
              alt="logo"
              variant="square"
              sx={{ height: 70, width: 70 }}
            />
            <Typography variant="body1" color="inherit">
              Founded on the precepts of integrity, we are commited to ensuring
              stakeholders have the possibility of turning their logistics
              operation into a competive advantage as they partner with us. Our
              track records include door to door delivery, haulage and
              e-commerce services.
            </Typography>
          </Box>

          <Box width={1}>
            <Typography
              variant="button"
              fontWeight="bold"
              sx={{ color: "#fff", fontSize: 24, mb: 8 }}
            >
              Head office
            </Typography>
            <Typography variant="body1" color="inherit" gutterBottom>
              14 Woji Rd, G.R.A, Phase 2, Port Harcourt. <br />
              <br />
              0704 445 5667, 0902 338 6404 <br />
              <Typography
                component="a"
                href="mailto:contact@creeksidelogistics.com"
                target="_blank"
                sx={{ color: "inherit" }}
                gutterBottom
              >
                contact@creeksidelogistics.com
              </Typography>
              <br />
              <br />
            </Typography>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.instagram.com/cslogisticsph/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.facebook.com/cslogisticsph/"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
          </Box>
          <Box width={1}>
            <Typography
              variant="button"
              fontWeight="bold"
              sx={{ color: "#fff", fontSize: 24 }}
              gutterButtom
            >
              Quick links
            </Typography>
            <List dense>
              <MyMenuItem {...{ name: "Home", link: "/" }} />
              {menuItems.menu.map(({ name, link }, index) => (
                <MyMenuItem key={index} {...{ name, link }} />
              ))}
            </List>
          </Box>
        </Stack>
      </Container>
      <Divider sx={{ bgcolor: "#ffffff55" }} />
      <Container>
        <Typography
          variant="body2"
          color="inherit"
          textAlign="center"
          sx={{ p: 2 }}
        >
          All Rights Reserved © Creekside Logistics {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default MyFooter;
