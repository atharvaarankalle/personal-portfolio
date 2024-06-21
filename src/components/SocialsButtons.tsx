import { IconButton, Stack, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import resume from "../assets/Atharva Arankalle Resume.pdf";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "0.2rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SocialsButtons = () => {
  const openMailClient = () => {
    window.open("mailto:atharvanz@gmail.com");
  };

  return (
    <Stack direction="row" gap={2}>
      <StyledIconButton
        aria-label="linkedin"
        href="https://www.linkedin.com/in/atharva-arankalle/"
        target="_blank"
      >
        <LinkedInIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </StyledIconButton>
      <StyledIconButton
        aria-label="github"
        href="https://github.com/atharvaarankalle"
        target="_blank"
      >
        <GitHubIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </StyledIconButton>
      <StyledIconButton
        aria-label="email"
        onClick={openMailClient}
      >
        <EmailIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </StyledIconButton>
      <StyledIconButton
        aria-label="resume"
        href={resume}
        target="_blank"
        >
        <DescriptionIcon sx={{ color: "#FFFFFF" }} fontSize="large" />  
        </StyledIconButton>        
    </Stack>
  );
};

export default SocialsButtons;
