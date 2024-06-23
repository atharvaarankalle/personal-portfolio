import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavLink = styled(Button)(({ theme }) => ({
  width: "auto",
  color: theme.palette.secondary.main,
  fontSize: "1.75rem",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    color: theme.palette.mutedPurple.main,
    backgroundColor: "transparent",
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
  "&.active": {
    color: theme.palette.mutedPurple.main,
    "&::before": {
      visibility: "visible",
      width: "100%",
    },
  },
}));

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDrawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 3rem",
        gap: "1rem",
      }}
    >
      <NavLink
        disableRipple
        href="#skills"
        onClick={() => setActiveLink("skills")}
        className={activeLink === "skills" ? "active" : ""}
      >
        skills
      </NavLink>
      <NavLink
        disableRipple
        href="#projects"
        onClick={() => setActiveLink("projects")}
        className={activeLink === "projects" ? "active" : ""}
      >
        projects
      </NavLink>
      <NavLink disableRipple>contact</NavLink>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          padding: "1rem",
          "&.navbarSolid": {
            backgroundColor: "#24183D",
            transition: "background-color 0.5s ease",
          },
          "&.navbarTransparent": {
            backgroundColor: "transparent",
            transition: "background-color 0.5s ease",
          },
        }}
        className={isScrolled ? "navbarSolid" : "navbarTransparent"}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              sm: "flex-start",
              md: "flex-end",
              lg: "flex-end",
            },
          }}
        >
          <IconButton
            aria-label="Open Menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#FFFFFF", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            gap={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <NavLink
              disableRipple
              href="#skills"
              onClick={() => setActiveLink("skills")}
              className={activeLink === "skills" ? "active" : ""}
            >
              skills
            </NavLink>
            <NavLink
              disableRipple
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >
              projects
            </NavLink>
            <NavLink disableRipple>contact</NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {renderDrawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
