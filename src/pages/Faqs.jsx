import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export default function Faqs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <div className="faqs-text">
          <h1 className="faqs-header">FAQs</h1>
          <p className="faqs-p">
            Find answers to common questions about our platform, Whether you're
            a new investor or an experienced entrepreneur, our FAQs provide the
            information you need to navigate the startup ecosystem with
            confidence.
          </p>
        </div>
        <div className="faqs-q">
          <Accordion
            elevation={0}
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{
                color: "#565e6d", fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                  lg: 26,
                  xl: 30,
                },
                fontWeight: "bold",
              }}>
                <span style={{ marginRight: 5, color: "#1769aa", }}>01</span> What are the legal requirements to start a business in Iraq?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ maxWidth: "1000px", color: "#565e6d", margin: "0 auto", paddingBottom: "25px" }}>
                Starting a business in Iraq involves several legal steps. You typically need to register your business with the Ministry of Trade, obtain necessary licenses and permits depending on your industry, and comply with tax regulations set by the General Commission for Taxes.
              </Typography>
            </AccordionDetails>
          </Accordion >
          <Accordion
            elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography style={{
                color: "#565e6d", fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                  lg: 26,
                  xl: 30,
                },
                fontWeight: "bold",
              }}>
                <span style={{ marginRight: 5, color: "#1769aa" }}>02</span> What is a startup?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ maxWidth: "1000px", color: "#565e6d", margin: "0 auto", paddingBottom: "25px" }}>

                A startup is a newly established business venture founded by entrepreneurs to develop and bring innovative products or services to market. These companies are characterized by their early stage of development, high growth potential, and often operate in industries where disruption or innovation is prevalent. Startups typically seek external funding, such as from venture capitalists, to fuel their growth and expansion. For more detailed information, you can refer to resources like Investopedia's definition of a startup.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{
                color: "#565e6d", fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                  lg: 26,
                  xl: 30,
                },
                fontWeight: "bold",
              }}>
                <span style={{ marginRight: 5, color: "#1769aa" }}>03</span> What are the common types of business entities in Iraq?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ maxWidth: "1000px", color: "#565e6d", margin: "0 auto", paddingBottom: "25px" }}>
              The common types of business entities in Iraq include Limited Liability Companies (LLCs), Joint Stock Companies, and branches of foreign companies. Each type has different requirements and implications for ownership, liability, and taxation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography style={{
                color: "#565e6d", fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                  lg: 26,
                  xl: 30,
                },
                fontWeight: "bold",
              }}>
                <span style={{ marginRight: 5, color: "#1769aa" }}>04</span> How can I find funding or investment for my startup in Iraq?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ maxWidth: "1000px", color: "#565e6d", margin: "0 auto", paddingBottom: "25px" }}>
              Funding options for startups in Iraq include government grants, angel investors, venture capital firms, and bank loans. Networking through industry events and startup incubators can also help connect you with potential investors.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography style={{
                color: "#565e6d", fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                  lg: 26,
                  xl: 30,
                },
                fontWeight: "bold",
              }}>
                <span style={{ marginRight: 5, color: "#1769aa" }}>05</span> What are the key sectors for startups in Iraq?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ maxWidth: "1000px", color: "#565e6d", margin: "0 auto", paddingBottom: "25px" }}>
              Promising sectors for startups in Iraq include technology (e.g., software development, mobile apps), agriculture, healthcare, renewable energy, and construction. These sectors have growth potential and opportunities for innovation.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}