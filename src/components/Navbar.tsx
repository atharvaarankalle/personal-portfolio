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
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import profilePicture from "../assets/profile-picture.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const NavLink = styled(Button)(({ theme }) => ({
  width: "auto",
  color: theme.palette.secondary.main,
  fontSize: "1.1rem",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.5rem",
  },
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    color: theme.palette.mutedPurple.main,
    backgroundColor: "transparent",
    textShadow: `0 0 10px ${theme.palette.mutedPurple.main}66`,
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
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled more than 10 pixels
      setIsScrolled(window.scrollY > 10);
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
        padding: "1.5rem 2rem",
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
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
          padding: "0.5rem 1rem",
          backgroundColor: isScrolled ? "rgba(10, 0, 20, 0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(127, 100, 189, 0.2)"
            : "none",
          transition: "all 0.3s ease-in-out",
        }}
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
              {pathname !== "/" && (
                <motion.div
                  layoutId="profile-photo"
                  style={{ display: "flex" }}
                >
                  <Avatar src={profilePicture} />
                </motion.div>
              )}
            </IconButton>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: pathname === "/" ? "1.8rem" : "1.4rem",
                  lg: pathname === "/" ? "2.2rem" : "1.6rem",
                },
                color: pathname === "/" ? "secondary.main" : "white",
                fontWeight: pathname === "/" ? 600 : 500,
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
              }}
            >
              Atharva Arankalle
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap={{ md: 2, lg: 4 }}
            sx={{ display: { xs: "none", md: "flex" } }}
            component={motion.div}
            initial={pathname === "/" ? "hidden" : "visible"}
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.8,
                },
              },
            }}
          >
            {[
              { label: "about", path: "/about" },
              { label: "projects", path: "/projects" },
              { label: "contact", path: "/contact" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <NavLink
                  disableRipple
                  onClick={() => navigate(item.path)}
                  className={pathname === item.path ? "active" : ""}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
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
