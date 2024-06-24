import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import TechnologyChip from "./TechnologyChip";

const StyledBox = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2rem"
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  opacity: 0.9,
  color: "#FFFFFF",
  width: "55%",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 550px)": {
    width: "75%"
  }
}));

const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem",
  },
});

const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Material UI"];

const backendSkills = ["Node.js", "Express", "Python", "Java", "C#"];

const dataSkills = ["SQL", "MongoDB", "Firebase"];

const toolsSkills = ["Git", "GitHub", "GitLab", "Jira", "Confluence"];

const Skills = () => {
    return (
      <StyledBox id="skills">
        <StyledCard>
          <CardContent>
            <StyledTypography variant="h3" fontWeight="bold" sx={{ paddingBottom: "1rem" }}>Skills</StyledTypography>
            <Typography variant="h5" fontWeight="bold" color="secondary">Frontend</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.75rem" }}>
              {frontendSkills.map((skill) => (
                <TechnologyChip key={skill} technologyName={skill} />
              ))}
            </Box>
            <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ paddingTop: "2rem" }}>Backend</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.75rem" }}>
              {backendSkills.map((skill) => (
                <TechnologyChip key={skill} technologyName={skill} />
              ))}
            </Box>
            <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ paddingTop: "2rem" }}>Data</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.75rem" }}>
              {dataSkills.map((skill) => (
                <TechnologyChip key={skill} technologyName={skill} />
              ))}
            </Box>
            <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ paddingTop: "2rem" }}>Tools</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.75rem" }}>
              {toolsSkills.map((skill) => (
                <TechnologyChip key={skill} technologyName={skill} />
              ))}
            </Box>
          </CardContent>
        </StyledCard>
      </StyledBox>
    );
}

export default Skills;
