import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Select, 
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Margin } from "@mui/icons-material";

const RegistrationForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [formErrors, setFormErrors] = useState({
    companyName: false,
    email: false,
    phone: false,
    businessNature: false,
    howDidYouHear: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();


    const errors = {
      companyName: !companyName,
      email: !email,
      howDidYouHear: !howDidYouHear,
      aboutCompany: !aboutCompany,
    };

    setFormErrors(errors);


    if (Object.values(errors).some((error) => error)) {
      return;
    }

    console.log({
      companyName,
      aboutCompany,
      email,
      website,
      howDidYouHear,
    });
    // backend API 
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "#1769aa",
          fontSize: "1.8rem",
          margin: "20px 0",
        }}
      >
        <b>Startup Company Registration Form</b>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Company Name *"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              error={formErrors.companyName}
              helperText={formErrors.companyName && "Company Name is required"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="About *"
              fullWidth
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
              error={formErrors.aboutCompany}
              helperText={formErrors.aboutCompany && "About Company is required"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address *"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formErrors.email}
              helperText={formErrors.email && "Email Address is required"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Website"
              fullWidth
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
  <FormControl fullWidth error={formErrors.howDidYouHear}>
    <Select
      value={howDidYouHear}
      onChange={(e) => setHowDidYouHear(e.target.value)}
      displayEmpty
      fullWidth
    >
      <MenuItem value="" disabled>
        How did you hear about us? *
      </MenuItem>
      <MenuItem value="Website">Website</MenuItem>
      <MenuItem value="Social Media">Social Media</MenuItem>
      <MenuItem value="Friend or Colleague">Friend or Colleague</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
    {formErrors.howDidYouHear && (
      <FormHelperText>This field is required</FormHelperText>
    )}
  </FormControl>
</Grid>

        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            margin: "30px 0",
            textTransform: "none",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
