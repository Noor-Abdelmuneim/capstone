import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Margin } from "@mui/icons-material";

const RegistrationForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [founders, setFounders] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessNature, setBusinessNature] = useState("");
  const [legalStructure, setLegalStructure] = useState("");
  const [establishmentDate, setEstablishmentDate] = useState("");
  const [website, setWebsite] = useState("");
  const [fundingStatus, setFundingStatus] = useState("");
  const [employeesCount, setEmployeesCount] = useState("");
  const [primaryMarket, setPrimaryMarket] = useState("");
  const [productsServices, setProductsServices] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [futurePlans, setFuturePlans] = useState("");
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

    // Validate required fields
    const errors = {
      companyName: !companyName,
      email: !email,
      phone: !phone,
      businessNature: !businessNature,
      howDidYouHear: !howDidYouHear,
    };

    setFormErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      return; // Do not submit if there are errors
    }

    // Handle form submission logic here
    console.log({
      companyName,
      founders,
      businessAddress,
      email,
      phone,
      businessNature,
      legalStructure,
      establishmentDate,
      website,
      fundingStatus,
      employeesCount,
      primaryMarket,
      productsServices,
      annualRevenue,
      futurePlans,
      howDidYouHear,
    });
    // You can send this data to a backend API or perform any other actions as needed
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name *"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              error={formErrors.companyName}
              helperText={formErrors.companyName && "Company Name is required"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Founders"
              fullWidth
              value={founders}
              onChange={(e) => setFounders(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Business Address"
              fullWidth
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address *"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formErrors.email}
              helperText={formErrors.email && "Email Address is required"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number *"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={formErrors.phone}
              helperText={formErrors.phone && "Phone Number is required"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nature of Business *"
              fullWidth
              value={businessNature}
              onChange={(e) => setBusinessNature(e.target.value)}
              error={formErrors.businessNature}
              helperText={
                formErrors.businessNature && "Nature of Business is required"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Legal Structure"
              fullWidth
              value={legalStructure}
              onChange={(e) => setLegalStructure(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Establishment"
              fullWidth
              value={establishmentDate}
              onChange={(e) => setEstablishmentDate(e.target.value)}
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Funding Status"
              fullWidth
              value={fundingStatus}
              onChange={(e) => setFundingStatus(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Employees"
              fullWidth
              value={employeesCount}
              onChange={(e) => setEmployeesCount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Primary Market"
              fullWidth
              value={primaryMarket}
              onChange={(e) => setPrimaryMarket(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Products or Services Offered"
              fullWidth
              multiline
              rows={4}
              value={productsServices}
              onChange={(e) => setProductsServices(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Annual Revenue"
              fullWidth
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Future Plans and Objectives"
              fullWidth
              multiline
              rows={4}
              value={futurePlans}
              onChange={(e) => setFuturePlans(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="How did you hear about us? *"
              fullWidth
              value={howDidYouHear}
              onChange={(e) => setHowDidYouHear(e.target.value)}
              error={formErrors.howDidYouHear}
              helperText={formErrors.howDidYouHear && "This field is required"}
            />
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
