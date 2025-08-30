import { Box, styled } from "@mui/material";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  const StyledBox = styled(Box)({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  });

  return (
    <StyledBox>
      <Projects />
    </StyledBox>
  );
};

export default ProjectsPage;
