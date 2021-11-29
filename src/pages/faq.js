import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Helmet } from "react-helmet";

const faq_list = [
  {
    section: "Delivery",
    details: [
      {
        question: "How do I book a rider?",
        answer:
          "Contact our Customer Service Officer (CSO) on one of our contact channels and supply the following information - Pickup address & phone number, Drop off address & phone number and Payment information.",
      },

      {
        question: "How many minutes does delivery take?",
        answer: "Depends on the location but usually within 45 minutes.",
      },
      {
        question: "Is delivery within Rivers or just Port Harcourt?",
        answer:
          "Yes, we also offer delivery services within the city of Benin.",
      },
      {
        question: "Do you deliver fragile products?",
        answer: "Yes and we deliver efficiently.",
      },
      {
        question: "What are your mode of transportation?",
        answer: "We make deliveries using bikes and mini-buses.",
      },
      {
        question: "Can I send an assigned rider on an extra delivery?",
        answer:
          "No, all transactions must be made through the Customer Service Officer (CSO) cahnnels.",
      },
    ],
  },
  {
    section: "Contact",
    details: [
      {
        question: "How do I contact you?",
        answer:
          "You can Call, Whatsapp, Send a Telegram or SMS Text to any of our Customer Service Officer (CSO) contacts on -  07044455667, 09023386404. You can also send a DM to any of our social media platforms.",
      },
      {
        question: "Can I book a delivery via WhatsApp?",
        answer:
          "Yes, you can also do so via other social media platforms like Telegram, Facebook and Instagram.",
      },
    ],
  },
  {
    section: "Payment",
    details: [
      {
        question: "Do you accept transfers?",
        answer: "Yes, we also have USSD codes for payment transactions.",
      },
      {
        question: "Can I pay on delivery?",
        answer: "Yes you can.",
      },
      {
        question: "Can I pay your Riders cash?",
        answer:
          "No, all transactions must be done with the Customer Service Officer (CSO) channel.",
      },
    ],
  },
];

const Question = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  const Icon = open ? ExpandLess : ExpandMore;
  return (
    <React.Fragment>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={question} />
        <Icon sx={{ color: "grey.400" }} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box p={2} pb={4}>
          <Typography variant="body2" color="text.secondary">
            {answer}
          </Typography>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

const FAQ = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Frequently Asked Questions (FAQs)</title>
      </Helmet>
      <Container>
        <Box sx={{ py: { xs: 16, md: 28 } }}>
          <Typography
            variant="h1"
            color="initial"
            sx={{ textAlign: { xs: "left", md: "center" } }}
            gutterBottom
          >
            FAQs
          </Typography>
          <Box pt={8}>
            {faq_list.map(({ section, details }, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Divider sx={{ my: 4 }} />}
                <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                  <Typography
                    variant="h4"
                    color="initial"
                    gutterBottom
                    sx={{ width: "100%" }}
                  >
                    {section}
                  </Typography>
                  <List sx={{ width: "100%" }}>
                    {details.map((val, i) => (
                      <Question {...val} />
                    ))}
                  </List>
                </Stack>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FAQ;
