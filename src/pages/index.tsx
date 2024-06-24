import { Grid, Typography, styled } from "@mui/material";
import ProfileSummary from "../components/ProfileSummary";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const StyledTypography = styled(Typography)({
  color: "#FFFFFF",
  "@media (max-width: 550px)": {
    fontSize: "1rem",
  }
});

const LandingPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProfileSummary />
      </Grid>
      <Grid item xs={12}>
        <Skills />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
      <Grid item xs={12} sx={{ paddingBottom: "1rem" }}>
        <StyledTypography variant="h6" textAlign="center" color="#FFFFFF">
          &copy; 2024 Atharva Arankalle. All rights reserved.
        </StyledTypography>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
