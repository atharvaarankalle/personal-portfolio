import { Box, Card, CardContent, Typography, styled } from "@mui/material";

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
  padding: 20,
  borderRadius: 10,
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Skills = () => {
    return (
      <StyledBox id="skills">
        <StyledCard>
          <CardContent>
            <Typography variant="h3" fontWeight="bold">Skills</Typography>
          </CardContent>
        </StyledCard>
      </StyledBox>
    );
}

export default Skills;