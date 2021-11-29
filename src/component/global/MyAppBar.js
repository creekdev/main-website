import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
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
      <Divider sx={{ mx: 1 }} />
      <ListItem
        onClick={onClose}
        component="a"
        href="https://app.creeksidelogistics.com"
        button
      >
        <ListItemText primary="Use app" />
      </ListItem>
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
              <Button
                variant="text"
                component={Link}
                color="inherit"
                to="/"
                startIcon={
                  <Avatar
                    src="/splash.png"
                    alt="logo"
                    variant="square"
                    sx={{ width: { xs: "60px", md: "36px" } }}
                  />
                }
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    textTransform: "initial",
                  }}
                >
                  {menuItems.title}
                </Typography>
              </Button>

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
                <Button
                  component="a"
                  component="a"
                  href="https://app.creeksidelogistics.com"
                  color="primary"
                  variant="contained"
                  size="small"
                  disableElevation
                >
                  Use app
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
