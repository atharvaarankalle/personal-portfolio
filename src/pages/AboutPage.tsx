import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import Skills from "../components/Skills";

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
            About Me
          </StyledTypography>
          <AboutMeTextTypography variant="body1" color="#fff">
            As a motivated and passionate software engineer, my journey has been
            marked by both comprehensive theoretical study, as well as hands-on
            experience through my previous four internship roles. I have honed
            my skills in full-stack web development using a variety of
            technologies such as React, Vue, Express, MySQL, MongoDB, Django and
            many more. I have also gained practical experience using Agile
            methodologies to approach delivering software products in industry.
            Both my studies and previous roles have instilled in me a commitment
            to quality, a desire to learn and grow, and a collaborative spirit
            that aligns with the values of forward-thinking organisations. I am
            eager to contribute my unique perspective and full-stack development
            expertise to a team that values adaptability and a commitment to
            excellence.
          </AboutMeTextTypography>
          <AboutMeTextTypography
            variant="body1"
            color="#fff"
            sx={{ padding: "1rem 0" }}
          >
            My hobbies outside of software engineering include playing the
            guitar, or playing video games with friends. I also enjoy watching
            movies and TV shows, and I'm always on the lookout for new
            recommendations. I'm also currently learning both Hindi and Korean
            on Duolingo, and I've got a streak of over 1 year on the app!
          </AboutMeTextTypography>
        </CardContent>
      </StyledCard>
      <Skills />
    </StyledBox>
  );
};

export default AboutPage;
