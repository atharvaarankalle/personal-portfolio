import { IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import resume from "../assets/Atharva Arankalle Resume.pdf";

const SocialsButtons = () => {
  const openMailClient = () => {
    window.open("mailto:atharvanz@gmail.com");
  };

  return (
    <Stack direction="row" gap={2}>
      <IconButton
        aria-label="linkedin"
        sx={{ padding: 0 }}
        href="https://www.linkedin.com/in/atharva-arankalle/"
        target="_blank"
      >
        <LinkedInIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="github"
        sx={{ padding: 0 }}
        href="https://github.com/atharvaarankalle"
        target="_blank"
      >
        <GitHubIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="email"
        sx={{ padding: 0 }}
        onClick={openMailClient}
      >
        <EmailIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="resume"
        sx={{ padding: 0 }}
        href={resume}
        target="_blank"
        >
        <DescriptionIcon sx={{ color: "#FFFFFF" }} fontSize="large" />  
        </IconButton>        
    </Stack>
  );
};

export default SocialsButtons;
