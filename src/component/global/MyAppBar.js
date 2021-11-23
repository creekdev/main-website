import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import {
  Slide,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";

import menuItems from "../utils/getMenus";

const MyDrawer = ({ open, onClose }) => (
  <Drawer
    sx={{ display: { xs: "block", md: "none" } }}
    anchor="top"
    {...{ open, onClose }}
  >
    <List>
      <ListItem onClick={onClose} component={Link} to={"/"} button>
        <ListItemText primary="Home" />
      </ListItem>
      {menuItems.menu.map(({ name, link }, index) => (
        <ListItem
          key={index}
          onClick={onClose}
          component={Link}
          to={link}
          button
        >
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default function MyAppBar(props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [open, setOpen] = React.useState(false);

  const hideTrigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!hideTrigger || !scrollTrigger}>
      <AppBar
        position={scrollTrigger ? "fixed" : "absolute"}
        color={scrollTrigger ? "secondary" : "transparent"}
        elevation={scrollTrigger ? 4 : 0}
      >
        <Toolbar sx={{ bgcolor: "transparent" }}>
          <Container>
            <Stack direction="row" alignItems="center">
              <Link style={{ lineHeight: 0 }} to="/">
                <Avatar
                  src="/splash.png"
                  alt="logo"
                  variant="square"
                  sx={{ width: { xs: "60px", md: "36px" }, marginRight: 3 }}
                />
              </Link>
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {menuItems.title}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "block", md: "none" }, width: "57px" }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <MyDrawer
                {...{
                  open,
                  onClose: () => {
                    setOpen(false);
                  },
                }}
              />
              <Stack
                direction="row"
                spacing={2}
                sx={{ ml: 2, display: { xs: "none", md: "block" } }}
              >
                {menuItems.menu.map(({ name, link }, index) => {
                  return (
                    <Button
                      component={Link}
                      to={link}
                      color="inherit"
                      key={index}
                    >
                      {name}
                    </Button>
                  );
                })}
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
