import {
  Box,
  Grid,
  IconButton,
  Typography,
  styled,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { motion } from "framer-motion";
import { useState } from "react";
import resume from "../assets/Atharva Arankalle Resume.pdf";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "1rem",
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
    overflow: "visible",
    padding: "2rem 1.5rem 4rem 1.5rem",
  },
}));

const ContactCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(20, 0, 38, 0.4)",
  backdropFilter: "blur(12px)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(127, 100, 189, 0.2)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0.75rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  height: "100%",
  width: "100%",
  position: "relative",
  "&:hover": {
    borderColor: theme.palette.mutedPurple.main,
    backgroundColor: "rgba(127, 100, 189, 0.1)",
    transform: "translateY(-5px)",
    boxShadow: `0 10px 30px -10px ${theme.palette.mutedPurple.main}44`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(130, 55, 235, 0.1)",
  color: theme.palette.primary.main,
  marginBottom: "0.5rem",
  transition: "transform 0.3s ease",
  "& svg": {
    fontSize: "2.5rem",
  },
}));

const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const email = "atharvanz@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setSnackbarOpen(true);
  };

  const contactMethods = [
    {
      title: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/atharva-arankalle/",
      description: "Connect for professional inquiries",
    },
    {
      title: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/atharvaarankalle",
      description: "Check out my projects and code",
    },
    {
      title: "Email",
      icon: <EmailIcon />,
      link: `mailto:${email}`,
      description: email,
      isEmail: true,
    },
    {
      title: "CV / Resume",
      icon: <DescriptionIcon />,
      link: resume,
      description: "Download my CV",
    },
  ];

  return (
    <StyledBox>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            color: "#FFFFFF",
            mb: 3,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
            mb: 4,
            textAlign: "center",
            opacity: 0.8,
            maxWidth: "600px",
          }}
        >
          Connect with me using any of the platforms below!
        </Typography>
      </motion.div>
      <Grid
        container
        columnSpacing={4}
        rowSpacing={6}
        sx={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {contactMethods.map((method, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            key={method.title}
            sx={{ display: "flex" }}
          >
            <ContactCard
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 100,
              }}
              onClick={() => window.open(method.link, "_blank")}
              style={{ width: "100%" }}
            >
              <IconWrapper className="icon-wrapper">{method.icon}</IconWrapper>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {method.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}
              >
                {method.description}
              </Typography>
              {method.isEmail && (
                <Tooltip title="Copy Email">
                  <IconButton
                    onClick={handleCopyEmail}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "rgba(255,255,255,0.3)",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </ContactCard>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "mutedPurple.main",
            color: "white",
            "& .MuiAlert-icon": { color: "white" },
          }}
        >
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};

export default Contact;
