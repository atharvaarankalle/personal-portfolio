import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import profilePicture from "../assets/profile-picture.jpg";
import SocialsButtons from "./SocialsButtons";

const StyledAvatar = styled(Avatar)({
  width: 500,
  height: 500,
  "@media (max-width: 1700px)": {
    width: 370,
    height: 370,
  },
  "@media (max-width: 1200px)": {
    width: 350,
    height: 350,
    marginTop: "5rem",
  },
  "@media (max-width: 550px)": {
    width: 300,
    height: 300,
  },
  "@media (max-width: 350px)": {
    width: 200,
    height: 200,
  },
});

const HeadingTextTypography = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "4rem",
  fontWeight: "bold",
  "@media (max-width: 550px)": {
    fontSize: "2rem",
  },
});

const NameTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "4rem",
  fontWeight: "bold",
  paddingBottom: "1rem",
  "@media (max-width: 550px)": {
    fontSize: "2rem",
  },
}));

const ProfileSummary = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      gap={{ md: "2rem", lg: "5rem" }}
    >
      <motion.div
        layoutId="profile-photo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          scale: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 },
          opacity: { duration: 0.5, delay: 0.2 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <StyledAvatar src={profilePicture} alt="Atharva Arankalle" />
      </motion.div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <Stack
          direction="row"
          gap={{ xs: 1, md: 2 }}
          width="100%"
          justifyContent="center"
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HeadingTextTypography>Hi, I'm</HeadingTextTypography>
          <NameTextTypography>Atharva</NameTextTypography>
        </Stack>
        <Typography
          variant="h4"
          textAlign="center"
          width="100%"
          color="secondary"
          sx={{
            "@media (max-width: 550px)": {
              fontSize: "1.5rem",
            },
          }}
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Welcome to my portfolio!
        </Typography>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <SocialsButtons />
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProfileSummary;
