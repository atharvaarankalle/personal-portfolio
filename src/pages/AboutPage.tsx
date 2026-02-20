import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import Experience from "../components/Experience/Experience";

const StyledBox = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  opacity: 0.9,
  color: "#FFFFFF",
  width: "65%",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: "0.2rem",
  },
}));

const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem",
  },
});

const AboutMeTextTypography = styled(Typography)({
  textAlign: "justify",
  paddingTop: "0.5rem",
  "@media (max-width: 550px)": {
    fontSize: "0.8rem",
  },
});

const AboutPage = () => {
  return (
    <StyledBox>
      <StyledCard>
        <CardContent>
          <StyledTypography
            variant="h3"
            fontWeight="bold"
            sx={{ paddingBottom: "1rem" }}
          >
            A Bit About Me
          </StyledTypography>
          <AboutMeTextTypography variant="body1" color="#fff" fontSize="1.1rem">
            As a motivated and passionate software engineer, my journey has been
            marked by both comprehensive theoretical study, as well as hands-on
            experience through my previous four internship roles. I have honed
            my skills in full-stack web development using a variety of
            technologies, and have also gained practical experience in industry
            to compliment these skills. Both my studies and previous roles have
            instilled in me a commitment to quality, a desire to grow, and a
            collaborative spirit that aligns with the values of forward-thinking
            organisations. I am eager to contribute meaningfully to a team that
            values adaptability and a commitment to excellence.
          </AboutMeTextTypography>
          <AboutMeTextTypography
            variant="body1"
            color="#fff"
            sx={{ padding: "1rem 0" }}
            fontSize="1.1rem"
          >
            My other hobbies include playing the guitar, playing video games
            with friends, watching movies and TV shows and reading. I also love
            finding new places to enjoy a delicious meal, and I'm always on the
            lookout for new recommendations.
          </AboutMeTextTypography>
        </CardContent>
      </StyledCard>
      <Experience />
    </StyledBox>
  );
};

export default AboutPage;
