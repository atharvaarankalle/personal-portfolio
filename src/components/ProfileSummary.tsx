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
    marginTop: "5rem"
  },
  "@media (max-width: 600px)": {
    width: 300,
    height: 300,
  },
});

const HeadingTextTypography = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "4rem",
  fontWeight: "bold",
  "@media (max-width: 550px)": {
    fontSize: "2rem",
  }
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
              About me
            </Typography>
            <AboutMeTextTypography variant="body1" color="#fff">
              I'm a final year Software Engineering student at The University of
              Auckland. I'm passionate about web development and my goal is to
              become a full-stack developer. I'm always looking for
              opportunities to learn and grow as a software engineer, and I like
              to bring this growth mindset to every project I work on and every
              team I'm a part of.
            </AboutMeTextTypography>
            <AboutMeTextTypography
              variant="body1"
              color="#fff"
              sx={{ paddingBottom: "1rem" }}
            >
              My hobbies outside of software engineering include playing the
              guitar, or playing video games with friends. I also enjoy watching
              movies and TV shows, and I'm always on the lookout for new
              recommendations. I'm also currently learning both Hindi and Korean
              on Duolingo, and I've got a streak of over 1 year on the app!
            </AboutMeTextTypography>
            <SocialsButtons />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSummary;
