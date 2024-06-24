import {
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import resume from "../assets/Atharva Arankalle Resume.pdf";

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
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 550px)": {
    width: "75%",
  },
}));

const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem",
  },
  "@media (max-width: 405px)": {
    fontSize: "1.5rem",
  },
});

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecorationColor: theme.palette.secondary.main,
  textDecorationThickness: "0.2rem",
  textUnderlineOffset: "0.4rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.mutedPurple.main,
    textDecorationColor: theme.palette.mutedPurple.main,
  },
  "@media (max-width: 550px)": {
    textDecorationThickness: "0.1rem",
  },
}));

const Contact = () => {
  return (
    <StyledBox id="contact">
      <StyledCard>
        <CardContent>
          <StyledTypography
            variant="h3"
            fontWeight="bold"
            sx={{ paddingBottom: "1rem" }}
          >
            Contact Me
          </StyledTypography>
          <Stack gap={2}>
            <Stack direction="row" alignItems="center" gap={2}>
              <LinkedInIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              <StyledLink
                href="https://www.linkedin.com/in/atharva-arankalle/"
                target="_blank"
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    "@media (max-width: 550px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  LinkedIn
                </Typography>
              </StyledLink>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <GitHubIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              <StyledLink
                href="https://github.com/atharvaarankalle"
                target="_blank"
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    "@media (max-width: 550px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  GitHub
                </Typography>
              </StyledLink>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <EmailIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              <StyledLink
              onClick={() => window.open("mailto:atharvanz@gmail.com")}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    "@media (max-width: 550px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  Email
                </Typography>
              </StyledLink>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <DescriptionIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              <StyledLink
                onClick={() => window.open(resume, "_blank")}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    "@media (max-width: 550px)": {
                      fontSize: "1rem",
                    }
                  }}
                >
                  CV / Resume
                </Typography>
              </StyledLink>
            </Stack>
          </Stack>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

export default Contact;
