import { Avatar, Box, Grid, Stack, Typography, styled } from "@mui/material";
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
  width: "20%",
  "@media (max-width: 550px)": {
    fontSize: "2rem",
  },
}));

const AboutMeTextTypography = styled(Typography)({
  maxWidth: "80%",
  textAlign: "justify",
  paddingTop: "0.5rem",
  "@media (max-width: 550px)": {
    fontSize: "0.8rem",
  },
});

const ProfileSummary = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        "@media (max-width: 550px)": {
          height: "auto",
          minHeight: "100vh",
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          item
          md={12}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StyledAvatar src={profilePicture} alt="Atharva Arankalle" />
        </Grid>
        <Grid item md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction="row" gap={2}>
              <HeadingTextTypography>Hi, I'm</HeadingTextTypography>
              <NameTextTypography>Atharva</NameTextTypography>
            </Stack>
            <Typography
              variant="h4"
              color="secondary"
              sx={{
                "@media (max-width: 550px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              Welcome to my portfolio!
            </Typography>
            <AboutMeTextTypography variant="body1" color="#fff">
              As a motivated and passionate software engineer, my journey has
              been marked by both comprehensive theoretical study, as well as
              hands-on experience through my previous four internship roles. I
              have honed my skills in full-stack web development using a variety
              of technologies, and have also gained practical experience in
              industry to compliment these skills. Both my studies and previous
              roles have instilled in me a commitment to quality, a desire to
              grow, and a collaborative spirit that aligns with the values of
              forward-thinking organisations. I am eager to contribute
              meaningfully to a team that values adaptability and a commitment
              to excellence.
            </AboutMeTextTypography>
            <AboutMeTextTypography
              variant="body1"
              color="#fff"
              sx={{ padding: "1rem 0" }}
            >
              My other hobbies include playing the guitar, or playing video
              games with friends. I also enjoy watching movies and TV shows and
              reading, and I'm always on the lookout for new recommendations.
              I'm also currently learning both Hindi and Korean on Duolingo!
            </AboutMeTextTypography>
            <SocialsButtons />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSummary;
