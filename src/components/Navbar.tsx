import { Box, Button, Stack, styled } from "@mui/material";

const StyledBox = styled(Box)({
    position: "fixed",
    top: 20,
    right: 20,
    width: "100%",
    display: "flex",
    justifyContent: "end",
});

const NavLink = styled(Button)(({ theme }) => ({
  width: "auto",
  color: theme.palette.secondary.main,
  fontSize: "1.75rem",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    color: theme.palette.mutedPurple.main,
  },
  "&::before": {
    content: "''",
    position: "absolute",
    height: 3,
    width: 0,
    bottom: 0,
    left: 0,
    visibility: "hidden",
    backgroundColor: theme.palette.mutedPurple.main,
    transition: "all 0.3s ease-in-out",
  },
  "&:hover::before": {
    visibility: "visible",
    width: "100%",
  },
}));

const Navbar = () => {
    return (
      <StyledBox>
        <Stack direction="row" gap={3}>
          <NavLink disableRipple>skills</NavLink>
          <NavLink disableRipple>projects</NavLink>
          <NavLink disableRipple>contact</NavLink>
        </Stack>
      </StyledBox>
    );
}

export default Navbar;
