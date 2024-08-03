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
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const RegistrationForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [logo, setLogo] = useState(null);
  const [formErrors, setFormErrors] = useState({
    companyName: false,
    email: false,
    aboutCompany: false,
    howDidYouHear: false,
  });

  const handleSubmit = async (event) => {
    // event.preventDefault();

    console.log(event);
    console.log(formErrors);
    console.log({
      company_name: companyName,
      about: aboutCompany,
      email: email,
      logo: logo,
    });
    // const errors = {
    //   companyName: !companyName,
    //   email: !email,
    //   aboutCompany: !aboutCompany,
    //   howDidYouHear: !howDidYouHear,
    // };

    // setFormErrors(errors);

    // if (Object.values(errors).some((error) => error)) {
    //   return;
    // }

    let formData = new FormData();
    formData.append("company_name", companyName);
    formData.append("about", aboutCompany);
    formData.append("business_nature", "");
    formData.append("email", email);
    formData.append("website", website);
    formData.append("img", "");
    formData.append("logo");
    console.log(formData);
    // try {
    //   console.log(formData);
    //   // const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups", {
    //   //   method: "POST",
    //   //   headers: {
    //   //     "Content-Type": "multipart/form-data",
    //   //   },
    //   //   body: JSON.stringify({
    //   //     company_name: companyName,
    //   //     about: aboutCompany,
    //   //     email: email,
    //   //     website: website,
    //   //     company_logo: "",
    //   //   }),
    //   // });

    //   // if (!response.ok) {
    //   //   throw new Error("Network response was not ok");
    //   // }

    //   // const result = await response.json();
    //   // console.log("Success:", result);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "#1769aa",
          fontSize: "1.8rem",
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <b className="form-title">Startup Company Registration Form</b>
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
              helperText={
                formErrors.aboutCompany && "About Company is required"
              }
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
                <MenuItem value="Friend or Colleague">
                  Friend or Colleague
                </MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {formErrors.howDidYouHear && (
                <FormHelperText>This field is required</FormHelperText>
              )}
            </FormControl>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{
                margin: "20px 0",
                textTransform: "none",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold",
              }}
            >
              Upload Company Logo
              <VisuallyHiddenInput type="file" required />
            </Button>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          style={{
            textTransform: "none",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
            marginBottom: "80px",
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
