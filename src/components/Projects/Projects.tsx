import { Box, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1.5rem 4rem 1.5rem",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1.5rem 4rem 1.5rem",
  },
}));

const GlassContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(20, 0, 38, 0.4)",
  backdropFilter: "blur(12px)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(127, 100, 189, 0.2)",
  padding: "3rem",
  width: "65%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
    padding: "2rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "1.25rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: "2.5rem",
  position: "relative",
  display: "inline-block",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: -8,
    left: 0,
    width: "40px",
    height: "3px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}));

const projects = [
  {
    title: "Portfolio Website",
    url: "https://github.com/atharvaarankalle/personal-portfolio",
    year: "Ongoing",
    description:
      "This project is my personal portfolio website. This website is my digital portfolio, allowing me to practice and develop my frontend web development skills while also showcasing my projects and skills. This website has been created using React with TypeScript to create a responsive and robust user interface. The website is styled using Material UI, to provide for an aesthetically pleasing user interface which is consistent with Material Design standards.",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Material UI"],
  },
  {
    title: "DiscOvery",
    url: "https://github.com/atharvaarankalle/discovery",
    year: "2024",
    description:
      "This project is a web application made for music lovers. It allows users to discover new music together, by suggesting a song in response to a given daily prompt, generated using AI. The application has been created using React and TypeScript in the frontend, Express and Node.js in the backend, and MongoDB as the database. The application has been styled using Material UI to provide a clean and intuitive user interface. The application also uses the Spotify API to allow users to search for and listen to suggested songs directly on the application. The OpenAI API is used to generate daily prompts for users to respond to.",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Material UI",
      "Express",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Skincredible",
    url: "https://github.com/atharvaarankalle/skincredible",
    year: "2023",
    description:
      "This project is an Android shopping application made for users' every skincare need. It allows users to browse and read about various skincare products, add them to their cart, and mock purchase them. The application has been created in Android Studio, using XML for the frontend, Java for the backend and Google Firebase for the database.",
    technologies: ["Java", "XML", "Firebase"],
  },
  {
    title: "Quick Draw!",
    url: "https://github.com/atharvaarankalle/quick-draw",
    year: "2022",
    description:
      "This project is a desktop drawing game for young children and teenagers. The aim of the game is to draw an image well enough for a machine learning model to correctly guess what the image is. The game has been created using Java and JavaFX to create a simple and intuitive user interface. The game uses a pre-trained machine learning model to guess the user's drawings, providing instant feedback to the user.",
    technologies: ["Java", "JavaFX"],
  },
];

const Projects = () => {
  return (
    <StyledBox>
      <GlassContainer
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle variant="h3" fontWeight="bold">
          Projects
        </SectionTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              key={project.title}
              size={{ md: 12, lg: 6 }}
              sx={{ display: "flex" }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </GlassContainer>
    </StyledBox>
  );
};

export default Projects;
