import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  styled,
} from "@mui/material";
import TechnologyChip from "./TechnologyChip";

interface ProjectCardProps {
  project: {
    title: string;
    url: string;
    year: string;
    description: string;
    technologies: string[];
  };
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mutedPurple.dark,
  color: "#FFFFFF",
  width: "100%",
  padding: 20,
  borderRadius: 10,
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#FFFFFF",
  textDecorationColor: "#FFFFFF",
  textDecorationThickness: "0.2rem",
  textUnderlineOffset: "0.4rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary.main,
    textDecorationColor: theme.palette.secondary.main,
  },
}));

const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 1200px)": {
        justifyContent: "flex-start"
    }
});

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <StyledCard>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <Grid container rowGap={1}>
          <Grid item xs={12} lg={9}>
            <StyledLink
              href={project.url !== "#" ? project.url : undefined}
              target="_blank"
            >
              <Typography variant="h5" fontWeight="bold">
                {project.title}
              </Typography>
            </StyledLink>
          </Grid>
          <Grid item md={12} lg={3}>
            <StyledBox>
              <Typography variant="h6">{project.year}</Typography>
            </StyledBox>
          </Grid>
        </Grid>
        <Typography variant="body1" textAlign="justify">
          {project.description}
        </Typography>
      </CardContent>
      <Box sx={{ padding: "1rem 1rem 0 1rem" }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ paddingBottom: "0.5rem" }}
        >
          Technologies
        </Typography>
        <Grid container spacing={1}>
          {project.technologies.map((technology) => (
            <Grid item key={technology}>
              <TechnologyChip technologyName={technology} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCard>
  );
};

export default ProjectCard;
