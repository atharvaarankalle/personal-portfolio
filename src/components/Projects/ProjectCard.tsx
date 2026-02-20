import { Box, Grid, Link, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import TechnologyChip from "../TechnologyChip";

interface ProjectCardProps {
  project: {
    title: string;
    url: string;
    year: string;
    description: string;
    technologies: string[];
  };
}

const GlassCard = styled(motion.div)(() => ({
  backgroundColor: "rgba(127, 100, 189, 0.05)",
  backdropFilter: "blur(4px)",
  borderRadius: "1rem",
  border: "1px solid rgba(127, 100, 189, 0.2)",
  padding: "2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(127, 100, 189, 0.1)",
    borderColor: "rgba(127, 100, 189, 0.4)",
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
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
  "@media (max-width: 550px)": {
    textDecorationThickness: "0.1rem",
  },
}));

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  "@media (max-width: 1200px)": {
    justifyContent: "flex-start",
  },
});

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <GlassCard>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Grid container rowGap={1} alignItems="flex-start">
          <Grid size={{ xs: 12, lg: 9 }}>
            <StyledLink
              href={project.url !== "#" ? project.url : undefined}
              target="_blank"
              underline="none"
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "white",
                  transition: "color 0.2s",
                  "&:hover": { color: "secondary.main" },
                  "@media (max-width: 550px)": {
                    fontSize: "1.2rem",
                  },
                }}
              >
                {project.title}
              </Typography>
            </StyledLink>
          </Grid>
          <Grid size={{ md: 12, lg: 3 }}>
            <StyledBox>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                  opacity: 0.9,
                  "@media (max-width: 550px)": {
                    fontSize: "0.9rem",
                  },
                }}
              >
                {project.year}
              </Typography>
            </StyledBox>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            opacity: 0.8,
            lineHeight: 1.7,
            textAlign: "justify",
            "@media (max-width: 550px)": {
              fontSize: "0.85rem",
              textAlign: "left",
            },
          }}
        >
          {project.description}
        </Typography>
      </Box>
      <Box sx={{ mt: "auto", pt: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            mb: 1.5,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Technologies
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.technologies.map((technology) => (
            <TechnologyChip
              key={technology}
              technologyName={technology}
              projectsChip
            />
          ))}
        </Box>
      </Box>
    </GlassCard>
  );
};

export default ProjectCard;
