import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Experience from "../components/Experience/Experience";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1.5rem 4rem 1.5rem",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1.5rem 4rem 1.5rem",
  },
}));

const GlassContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(20, 0, 38, 0.4)",
  backdropFilter: "blur(12px)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(127, 100, 189, 0.2)",
  padding: "3rem",
  width: "65%",
  marginBottom: "3rem",
  [theme.breakpoints.down("md")]: {
    width: "85%",
    padding: "2rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "1.25rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: "1.5rem",
  position: "relative",
  display: "inline-block",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: -8,
    left: 0,
    width: "40px",
    height: "3px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}));

const AboutPage = () => {
  return (
    <StyledBox>
      <GlassContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionTitle variant="h3" fontWeight="bold">
          A Bit About Me
        </SectionTitle>
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              opacity: 0.9,
              mb: 3,
            }}
            component={motion.p}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            As a motivated and passionate software engineer, my journey has been
            marked by both comprehensive theoretical study, as well as hands-on
            experience through my previous four internship roles. I have honed
            my skills in full-stack web development using a variety of
            technologies, and have also gained practical experience in industry
            to compliment these skills.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              opacity: 0.9,
              mb: 3,
            }}
            component={motion.p}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Both my studies and previous roles have instilled in me a commitment
            to quality, a desire to grow, and a collaborative spirit that aligns
            with the values of forward-thinking organisations. I am eager to
            contribute meaningfully to a team that values adaptability and a
            commitment to excellence.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              opacity: 0.9,
            }}
            component={motion.p}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            My other hobbies include playing the guitar, playing video games
            with friends, watching movies and TV shows and reading. I also love
            finding new places to enjoy a delicious meal, and I'm always on the
            lookout for new recommendations.
          </Typography>
        </Box>
      </GlassContainer>
      <Experience />
    </StyledBox>
  );
};

export default AboutPage;
