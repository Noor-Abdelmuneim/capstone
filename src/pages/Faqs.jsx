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
              <Typography style={{ color: "#565e6d" ,fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                      lg: 26,
                      xl: 30,
                    },
                    fontWeight: "bold",}}>
                <span style={{ marginRight: 5 , color: "#1769aa" , }}>01</span> Are startups worth investing in?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{maxWidth:"1000px", color: "#565e6d", margin: "0 auto", paddingBottom:"25px"}}>
                Investing in startups can be highly rewarding, both financially
                and personally. Startups have the potential for significant
                growth and high returns, often outpacing more established
                companies. Additionally, investing in startups allows you to
                support innovative ideas and entrepreneurial talent,
                contributing to economic development and job creation. However,
                it's important to remember that investing in startups also comes
                with risks, including the possibility of losing your investment.
                It's crucial to conduct thorough research, diversify your
                investments, and consider seeking advice from experienced
                investors or financial advisors.
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
              <Typography style={{ color: "#565e6d" ,fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                      lg: 26,
                      xl: 30,
                    },
                    fontWeight: "bold",}}>
                <span style={{ marginRight: 5 , color: "#1769aa" }}>02</span> What is a startup?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{maxWidth:"1000px", color: "#565e6d", margin: "0 auto" , paddingBottom:"25px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ color: "#565e6d" ,fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                      lg: 26,
                      xl: 30,
                    },
                    fontWeight: "bold",}}>
                <span style={{ marginRight: 5 , color: "#1769aa"  }}>03</span> What are the key steps to starting a business in Iraq?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{maxWidth:"1000px", color: "#565e6d", margin: "0 auto" ,paddingBottom:"25px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography style={{ color: "#565e6d" ,fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                      lg: 26,
                      xl: 30,
                    },
                    fontWeight: "bold",}}>
                <span style={{ marginRight: 5 , color: "#1769aa"  }}>04</span> How can I find mentors or advisors for my startup?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{maxWidth:"1000px", color: "#565e6d", margin: "0 auto" , paddingBottom:"25px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}