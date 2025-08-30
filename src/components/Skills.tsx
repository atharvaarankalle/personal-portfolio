import { Card, CardContent, Grid, Typography, styled } from "@mui/material";
import TechnologyChip from "./TechnologyChip";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  opacity: 0.9,
  color: "#FFFFFF",
  width: "65%",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 550px)": {
    width: "75%",
  },
}));

const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem",
  },
});

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Material UI",
];

const backendSkills = ["Node.js", "Express", "Python", "Java", "C#"];

const dataSkills = ["SQL", "MongoDB", "Firebase"];

const toolsSkills = ["Git", "GitHub", "Figma", "GitLab", "Jira", "Confluence"];

const Skills = () => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography
          variant="h3"
          fontWeight="bold"
          sx={{ paddingBottom: "1rem" }}
        >
          Skills
        </StyledTypography>
        <Grid container rowGap={3} columnSpacing={5}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography variant="h5" fontWeight="bold" color="secondary">
              Frontend
            </Typography>
            <Grid
              container
              rowGap={2}
              columnGap={2}
              sx={{ paddingTop: "0.75rem" }}
            >
              {frontendSkills.map((skill) => (
                <Grid key={skill} size="auto">
                  <TechnologyChip technologyName={skill} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="secondary"
            >
              Backend
            </Typography>
            <Grid
              container
              rowGap={2}
              columnGap={2}
              sx={{ paddingTop: "0.75rem" }}
            >
              {backendSkills.map((skill) => (
                <Grid key={skill} size="auto">
                  <TechnologyChip technologyName={skill} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="secondary"
              sx={{ paddingTop: "2rem" }}
            >
              Data
            </Typography>
            <Grid
              container
              rowGap={2}
              columnGap={2}
              sx={{ paddingTop: "0.75rem" }}
            >
              {dataSkills.map((skill) => (
                <Grid key={skill} size="auto">
                  <TechnologyChip technologyName={skill} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="secondary"
              sx={{ paddingTop: "2rem" }}
            >
              Project Management Tools
            </Typography>
            <Grid
              container
              rowGap={2}
              columnGap={2}
              sx={{ paddingTop: "0.75rem" }}
            >
              {toolsSkills.map((skill) => (
                <Grid key={skill} size="auto">
                  <TechnologyChip technologyName={skill} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default Skills;
