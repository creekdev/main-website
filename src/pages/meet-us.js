import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import VisibilitySensor from "react-visibility-sensor";

import numberWithCommas from "../component/utils/numberwithcommas";

import Helmet from "react-helmet";
import { red } from "@mui/material/colors";

const serviceOverview = [
  {
    img: "icons/001-efficiency.png",
    title: "Efficiency",
    text: "Our efficient delivery service is characterized as safe, fast, accurate, cost-effective and reliable.",
  },
  {
    img: "icons/003-speed.png",
    title: "Speed",
    text: "We offer home or office Same-day and Next-day delivery services within Port Harcourt",
  },
  {
    img: "icons/005-lock.png",
    title: "Safety",
    text: "We reserve the right to reverse logitics services for returned or faulty items",
  },
  {
    img: "icons/006-customer-service.png",
    title: "Service",
    text: "Excellent communication and interpersonal relations from our highly skilled and experienced staff and dispatch drivers",
  },
  {
    img: "icons/007-phone-call.png",
    title: "Communication",
    text: "Instant text notification/ Email confirmation of delivery report and enhanced security of deliveries (Signature Upon Delivery)",
  },
  {
    img: "icons/008-location.png",
    title: "Technology",
    text: "Use of Tech in the real-time monitoring, and tracking of parcels.",
  },
  {
    img: "icons/009-purse.png",
    title: "Affordability",
    text: "Delivery cost from as low  ₦500 (Inc. VAT), transfer/Cash on delivery services and insurance on high-value items",
  },
];

const MeetUs = () => {
  const counter = React.useRef();

  const [counted, setCounted] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [isReady, setReady] = React.useState(false);

  const max = 2700;

  let timer;
  const imagesize = "500px";

  React.useEffect(() => {
    if (counted && !timer) {
      timer = setInterval(() => {
        if (count >= max) {
          clearInterval(timer);
        } else {
          setCount((prevCount) => Math.min(prevCount + 20, max));
        }
      }, 1);
    }
    return () => clearInterval(timer);
  }, [counted]);

  React.useEffect(() => {
    setReady(true);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Meet Us</title>
      </Helmet>
      <Box sx={{ bgcolor: "#bb330022", position: "relative" }}>
        <Container>
          <Stack
            spacing={2}
            direction={{ xs: "column", md: "row" }}
            sx={{ pt: { xs: 16, md: 28 }, pb: { xs: 28 } }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography variant="h1" color="text.primary" gutterBottom>
                Meet Us
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Creekside Logistics is a value-driven logistics service provider
                incorporated in November 2018, located in Port Harcourt, Rivers
                State, Nigeria. We are commited to ensuring individuals,
                business owners and government institutions measure up their
                logistics operations with the fast, ever-changing world. We
                guarantee customers remain relevant in a highly competive
                business environment by giving them a seamless experience with
                fast deliveries.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", p: { xs: 15, sm: 28, md: 0 } }} />
          </Stack>
        </Container>
        <Avatar
          src="/brand2.png"
          alt="Front Desk photo"
          variant="square"
          sx={{
            height: { xs: "100vw", md: "50vw", lg: "45vw" },
            width: { xs: "100vw", md: "50vw", lg: "45vw" },
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </Box>
      <Box sx={{ py: { xs: 16, md: 28 } }} id="services">
        <Container>
          <Typography
            variant="h2"
            color="text.primary"
            textAlign="center"
            gutterBottom
          >
            Service overview
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: "65ch", mx: "auto", mb: 4 }}
            gutterBottom
          >
            Our state-of-the-art office, integrated virtual platforms,
            professional customer service representatives and expert
            riders/drivers are always available and commited to serve you at all
            times.
          </Typography>
          <List sx={{ mt: 4, display: { sm: "none" } }}>
            {serviceOverview.map(({ img, title, text }, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Divider variant="inset" component="li" />}
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar variant="square" src={img} alt={title} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="text.secondary"
                      >
                        {title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ mt: 2, display: { xs: "none", sm: "block" } }}>
            <Grid container spacing={{ xs: 6, md: 4 }}>
              {serviceOverview.map(({ img, title, text }, index) => (
                <Grid key={index} item xs={6} md={4} lg={3}>
                  <Paper
                    variant="outlined"
                    sx={{ borderRadius: 6, overflow: "hidden" }}
                  >
                    <Stack
                      sx={{
                        p: 4,
                        alignItems: "center",
                        height: 300,
                      }}
                    >
                      <Avatar
                        variant="square"
                        src={img}
                        alt={title}
                        sx={{
                          height: 80,
                          width: 80,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight={200}
                        color="text.primary"
                        textAlign="center"
                        gutterBottom
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                      >
                        {text}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 16, md: 28 } }}>
        <Container>
          <Typography
            variant="h2"
            color="text.primary"
            textAlign="center"
            gutterBottom
          >
            Delivery Systems
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: "65ch", mx: "auto" }}
            gutterBottom
          >
            For your optimum satisfation, Creekside Logitics has provided ranges
            of carriers for safe delivery of all items.
          </Typography>
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={4}
            sx={{ mt: 4 }}
          >
            <Stack sx={{ width: "100%", p: 5, pb: 0, mt: 20 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="initial"
                sx={{ mb: 2 }}
                gutterButtom
              >
                Bikes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Courier services provide express deliveries of smaller parcels
                from one location to another with the convenience of dispatch
                riders.
              </Typography>
            </Stack>
            <Stack sx={{ width: "100%", height: 150, mt: 0 }}>
              <img
                src="/bike.png"
                style={{
                  weight: imagesize,
                  height: imagesize,
                  zIndex: -5,
                }}
                alt="Bike photo"
              />
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column-reverse", md: "row-reverse" }}
            spacing={4}
            sx={{ mt: 4 }}
          >
            <Stack sx={{ width: "100%", p: 5, pb: 0, mt: 20 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="initial"
                sx={{ mb: 2 }}
                gutterButtom
              >
                Mini-van
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our Mini-vans, Buses and Cars are available to deliver larger
                parcels of any capacity to your preferred locations anywhere in
                Port Harcourt. We also provide VIP transportation and Airport
                Pickups.
              </Typography>
            </Stack>
            <Stack sx={{ width: "100%", height: 150, mt: 0 }}>
              <img
                src="/bus.png"
                style={{
                  weight: imagesize,
                  height: imagesize,
                }}
                alt="Bus photo"
              />
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={4}
            sx={{ mt: 4 }}
          >
            <Box sx={{ width: "100%", p: 5, pb: 0, mt: 20 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="initial"
                sx={{ mb: 2 }}
                gutterButtom
              >
                Haulage Services <Chip label="Coming Soon" color="primary" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CS Logistics provides quality haulage and transportation
                services with vehicles ranging from small vans of 1.5 tons to
                delivery trucks of 30 tons. Our fleet is readily available,
                manned by a team of professional drivers commited to ensure
                customers satisfaction. Time-sensitve, fragile or valuable
                consignments are transported to any destination by vehicles of
                the highest specifications with fully trained and experienced
                staff who understand the purpose of special freight movements
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: 150, mt: 0 }}></Box>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 16, md: 28 } }} id="contact">
        <Container>
          <Box
            sx={{
              color: "#fff",
              p: 16,
              px: { xs: 4, md: 16 },
              textAlign: "center",
              borderRadius: 2,
              background:
                "linear-gradient(0deg, rgba(10, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(/delivery.jpg)",
              backgroundSize: "cover",
              // backgroundAttachment: "fixed",
              backgroundPosition: "center top",
            }}
          >
            <Typography variant="h3" sx={{ maxWidth: "30ch", mx: "auto" }}>
              With Over{" "}
              <VisibilitySensor
                onChange={(isVisible) =>
                  isVisible !== counted &&
                  isVisible &&
                  isReady &&
                  setCounted(true)
                }
              >
                <Typography
                  ref={counter}
                  variant="h3"
                  color="primary.dark"
                  component="span"
                >
                  {numberWithCommas(count)}
                </Typography>
              </VisibilitySensor>{" "}
              Successful deliveries across Port Harcourt
            </Typography>
            <Divider
              sx={{ mx: "auto", maxWidth: "50px", my: 4, bgcolor: "#ffffffcc" }}
            />
            <Typography variant="subtitle1" color="primary.dark">
              Call us for your deliveries right now!!!
            </Typography>
            <Typography variant="h4" color="inherit">
              +2347044455667, +2349023386404
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default MeetUs;
