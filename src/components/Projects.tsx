import { Box, Card, CardContent, Typography, styled } from "@mui/material";

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
  padding: 20,
  borderRadius: 10,
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
}));

const Projects = () => {
    return (
      <StyledBox>
        <StyledCard>
          <CardContent>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ paddingBottom: "1rem" }}
            >
              Projects
            </Typography>
          </CardContent>
        </StyledCard>
      </StyledBox>
    );
}

export default Projects;
