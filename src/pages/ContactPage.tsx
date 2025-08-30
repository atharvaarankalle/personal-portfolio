import { Box, styled } from "@mui/material";
import Contact from "../components/Contact";

const ContactPage = () => {
  const StyledBox = styled(Box)({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "2rem",
  });

  return (
    <StyledBox>
      <Contact />
    </StyledBox>
  );
};

export default ContactPage;
