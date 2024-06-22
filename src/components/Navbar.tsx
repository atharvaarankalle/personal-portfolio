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
  }
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
