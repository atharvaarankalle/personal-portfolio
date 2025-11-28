import { Box, styled, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
});

const ContentBox = styled(Box)({
  flex: 1,
  padding: "2rem 0",
});

const StyledTypography = styled(Typography)({
  color: "#FFFFFF",
  paddingBottom: "1rem",
  "@media (max-width: 550px)": {
    fontSize: "1rem",
  },
});

const BasePage = () => {
  const location = useLocation();
  return (
    <StyledBox>
      <Navbar />
      <ContentBox>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Outlet />
        </motion.div>
      </ContentBox>
      <StyledTypography variant="h6" textAlign="center">
        &copy; 2025 Atharva Arankalle. All rights reserved.
      </StyledTypography>
    </StyledBox>
  );
};

export default BasePage;
