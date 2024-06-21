import { IconButton, Stack, Typography, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import resume from "../assets/Atharva Arankalle Resume.pdf";
import StyledTooltip from "./StyledTooltip";

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
      <StyledTooltip
        title={<Typography sx={{ fontSize: "1rem" }}>LinkedIn</Typography>}
        placement="bottom"
        arrow
        disableInteractive
      >
        <StyledIconButton
          aria-label="linkedin"
          onClick={() => window.open("https://www.linkedin.com/in/atharva-arankalle/", "_blank")}
        >
          <LinkedInIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
        </StyledIconButton>
      </StyledTooltip>
      <StyledTooltip
        title={<Typography sx={{ fontSize: "1rem" }}>GitHub</Typography>}
        placement="bottom"
        arrow
        disableInteractive
      >
        <StyledIconButton
          aria-label="github"
          onClick={() => window.open("https://github.com/atharvaarankalle", "_blank")}
        >
          <GitHubIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
        </StyledIconButton>
      </StyledTooltip>
      <StyledTooltip
        title={<Typography sx={{ fontSize: "1rem" }}>Email</Typography>}
        placement="bottom"
        arrow
        disableInteractive
      >
        <StyledIconButton aria-label="email" onClick={openMailClient}>
          <EmailIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
        </StyledIconButton>
      </StyledTooltip>
      <StyledTooltip
        title={<Typography sx={{ fontSize: "1rem" }}>CV</Typography>}
        placement="bottom"
        arrow
        disableInteractive
      >
        <StyledIconButton aria-label="resume" onClick={() => window.open(resume, "_blank")}>
          <DescriptionIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
        </StyledIconButton>
      </StyledTooltip>
    </Stack>
  );
};

export default SocialsButtons;
