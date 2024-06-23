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

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <StyledCard>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <StyledLink
            href={project.url !== "#" ? project.url : undefined}
            target="_blank"
          >
            <Typography variant="h5" fontWeight="bold">
              {project.title}
            </Typography>
          </StyledLink>
          <Typography variant="h6">{project.year}</Typography>
        </Box>
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
          Technologies:
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
