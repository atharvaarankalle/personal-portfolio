import { Box, styled, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
});

const ContentBox = styled(Box)({
  flex: 1,
  padding: "2rem 0"
});

const StyledTypography = styled(Typography)({
  color: "#FFFFFF",
  paddingBottom: "1rem",
  "@media (max-width: 550px)": {
    fontSize: "1rem",
  },
});

const BasePage = () => {
  return (
    <StyledBox>
      <Navbar />
      <ContentBox>
        <Outlet />
      </ContentBox>
      <StyledTypography variant="h6" textAlign="center">
        &copy; 2025 Atharva Arankalle. All rights reserved.
      </StyledTypography>
    </StyledBox>
  );
};

export default BasePage;
