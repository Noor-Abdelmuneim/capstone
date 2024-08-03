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
import Loading from "../components/Loading/Loading";

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

const ImagePreview = styled("img")({
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  marginLeft: "20px",
});

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [businessNature, setBusinessNature] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoName, setLogoName] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const [formErrors, setFormErrors] = useState({
    companyName: false,
    email: false,
    aboutCompany: false,
    howDidYouHear: false,
    emailInvalid: false,
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLogo(file);
    setLogoName(file ? file.name : "No file selected");

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {
      companyName: companyName.length < 3,
      email: email.length < 3,
      aboutCompany: aboutCompany.length < 3,
      howDidYouHear: !howDidYouHear,
      businessNature: businessNature.length < 3,
      website: website.length < 3,
      emailInvalid: !validateEmail(email),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    let fd = new FormData();
    fd.append("company_name", companyName);
    fd.append("about", aboutCompany);
    fd.append("business_nature", businessNature);
    fd.append("about_iraqi_hub", howDidYouHear);
    fd.append("email", email);
    fd.append("website", website);

    if (logo) {
      fd.append("logo", logo);
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups",
        {
          method: "POST",
          body: fd,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);

      setCompanyName("");
      setAboutCompany("");
      setBusinessNature("");
      setEmail("");
      setWebsite("");
      setHowDidYouHear("");
      setLogo(null);
      setLogoName("");
      setLogoPreview("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                  helperText={
                    formErrors.companyName &&
                    "Company Name must be at least 3 characters long"
                  }
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
                    formErrors.aboutCompany &&
                    "About Company must be at least 3 characters long"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Business Nature *"
                  fullWidth
                  value={businessNature}
                  onChange={(e) => setBusinessNature(e.target.value)}
                  error={formErrors.businessNature}
                  helperText={
                    formErrors.businessNature &&
                    "Business Nature must be at least 3 characters long"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address *"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={formErrors.email || formErrors.emailInvalid}
                  helperText={
                    formErrors.email
                      ? "Email Address must be at least 3 characters long"
                      : formErrors.emailInvalid
                      ? "Invalid email address"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Website *"
                  fullWidth
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  error={formErrors.website}
                  helperText={
                    formErrors.website &&
                    "Website must be at least 3 characters long"
                  }
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    style={{
                      textTransform: "none",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Upload Company Logo
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                    />
                  </Button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      marginBottom: "10px",
                      color: "blue",
                    }}
                  >
                    {logoName && (
                      <Typography variant="body2">{logoName}</Typography>
                    )}
                    {logoPreview && (
                      <ImagePreview src={logoPreview} alt={logoName} />
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
        </>
      )}
    </Container>
  );
};

export default RegistrationForm;
