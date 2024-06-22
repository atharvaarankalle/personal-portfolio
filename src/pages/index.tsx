import { Box, styled } from "@mui/material";
import ProfileSummary from "../components/ProfileSummary";
import Skills from "../components/Skills";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
});

const LandingPage = () => {
  return (
    <StyledBox>
      <ProfileSummary />
      <Skills />
    </StyledBox>
  );
};

export default LandingPage;
