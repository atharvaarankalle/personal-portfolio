import { Box, styled } from "@mui/material";
import ProfileSummary from "../components/ProfileSummary";

const StyledBox = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
});

const LandingPage = () => {
  return (
    <StyledBox>
      <ProfileSummary />
    </StyledBox>
  );
};

export default LandingPage;
