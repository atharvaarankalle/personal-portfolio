import { Grid } from "@mui/material";
import ProfileSummary from "../components/ProfileSummary";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const LandingPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProfileSummary />
      </Grid>
      <Grid item xs={12}>
        <Skills />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
