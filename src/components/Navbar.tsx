import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import profilePicture from "../assets/profile-picture.jpg";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        onClick={() => navigate("/about")}
        className={pathname === "/about" ? "active" : ""}
      >
        about
      </NavLink>
      <NavLink
        disableRipple
        onClick={() => navigate("/projects")}
        className={pathname === "/projects" ? "active" : ""}
      >
        projects
      </NavLink>
      <NavLink
        disableRipple
        onClick={() => navigate("/contact")}
        className={pathname === "/contact" ? "active" : ""}
      >
        contact
      </NavLink>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
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
        className="navbarSolid"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              sm: "flex-start",
              md: "space-between",
              lg: "space-between",
            },
          }}
        >
          <IconButton
            aria-label="Open Menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: "#FFFFFF",
              display: { md: "none" },
              paddingRight: "1rem",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            onClick={() => navigate("/")}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <IconButton sx={{ padding: 0 }}>
              <Avatar src={profilePicture} />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 550px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Atharva Arankalle
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <NavLink
              disableRipple
              onClick={() => navigate("/about")}
              className={pathname === "/about" ? "active" : ""}
            >
              about
            </NavLink>
            <NavLink
              disableRipple
              onClick={() => navigate("/projects")}
              className={pathname === "/projects" ? "active" : ""}
            >
              projects
            </NavLink>
            <NavLink
              disableRipple
              onClick={() => navigate("/contact")}
              className={pathname === "/contact" ? "active" : ""}
            >
              contact
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {renderDrawer}
      </Drawer>
    </>
  );
};

export default Navbar;
