import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import ProjectCard from "./ProjectCard";

const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "2rem",
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
    width: "75%",
  },
}));

const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem"
  }
});

const projects = [
  {
    title: "Portfolio Website",
    url: "https://github.com/atharvaarankalle/personal-portfolio",
    year: "2024",
    description:
      "This project is my personal portfolio website. This website is my digital portfolio, allowing me to practice and develop my frontend web development skills while also showcasing my projects and skills. This website has been built using React with TypeScript to create a responsive and robust user interface. The website is styled using Material UI, to provide for an aesthetically pleasing user interface which is consistent with Material Design standards.",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Material UI"],
  },
  {
    title: "DiscOvery",
    url: "https://github.com/atharvaarankalle/discovery",
    year: "2024",
    description:
      "This project is a web application made for music lovers. It allows users to discover new music together, by suggesting a song in response to a given daily prompt, generated using AI. The application has been built using React and TypeScript in the frontend, Express and Node.js in the backend, and MongoDB as the database. The application has been styled using Material UI to provide a clean and intuitive user interface. The application also uses the Spotify API to allow users to search for and listen to suggested songs directly on the application. The OpenAI API is used to generate daily prompts for users to respond to.",
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
      "This project is an Android shopping application made for users' every skincare need. It allows users to browse and read about various skincare products, add them to their cart, and mock purchase them. The application has been built in Android Studio, using XML for the frontend, Java for the backend and Google Firebase for the database.",
    technologies: ["Java", "XML", "Firebase"],
  },
  {
    title: "Quick Draw!",
    url: "https://github.com/atharvaarankalle/quick-draw",
    year: "2022",
    description:
      "This project is a desktop drawing game for young children and teenagers. The aim of the game is to draw an image well enough for a machine learning model to correctly guess what the image is. The game has been built using Java and JavaFX to create a simple and intuitive user interface. The game uses a pre-trained machine learning model to guess the user's drawings, providing instant feedback to the user.",
    technologies: ["Java", "JavaFX"],
  },
];

const Projects = () => {
  return (
    <StyledBox id="projects">
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h3" fontWeight="bold">
            Projects
          </StyledTypography>
          <Grid container spacing={5}>
            {projects.map((project) => (
              <Grid
                key={project.title}
                item
                md={12}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

export default Projects;
