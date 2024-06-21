import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import profilePicture from "../assets/profile-picture.jpg";
import SocialsButtons from "./SocialsButtons";

const StyledAvatar = styled(Avatar)({
  width: 500,
  height: 500,
});

const ProfileDescriptionBox = styled(Box)({
    paddingTop: "3rem",
});

const HeadingTextTypography = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "4rem",
  fontWeight: "bold",
});

const NameTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "4rem",
  fontWeight: "bold",
  paddingBottom: "1rem"
}));

const AboutMeTextTypography = styled(Typography)({
    maxWidth: "80%",
    textAlign: "justify",
    paddingTop: "0.5rem"
});

const ProfileSummary = () => {
  return (
    <Stack direction="row" gap={7} sx={{ maxWidth: "60%" }}>
      <StyledAvatar src={profilePicture} alt="Atharva Arankalle" />
      <ProfileDescriptionBox>
        <Stack direction="row" gap={2}>
          <HeadingTextTypography>Hi, I'm</HeadingTextTypography>
          <NameTextTypography>Atharva</NameTextTypography>
        </Stack>
        <Typography variant="h4" color="secondary">
          About me
        </Typography>
        <AboutMeTextTypography variant="body1" color="#fff">
          I'm a final year Software Engineering student at The University of
          Auckland. I'm passionate about web development and my goal is to
          become a full-stack developer. I'm always looking for opportunities to
          learn and grow as a software engineer, and I like to bring this growth
          mindset to every project I work on and every team I'm a part of.
        </AboutMeTextTypography>
        <AboutMeTextTypography variant="body1" color="#fff" sx={{ paddingBottom: "1rem" }}>
            My hobbies outside of software engineering include playing the guitar, or playing video games with friends. I also enjoy watching movies and TV shows, and I'm always on the lookout for new recommendations.
            I'm also currently learning both Hindi and Korean on Duolingo, and I've got a streak of over 1 year on the app!
        </AboutMeTextTypography>
        <SocialsButtons />
      </ProfileDescriptionBox>
    </Stack>
  );
};

export default ProfileSummary;
