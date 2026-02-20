import { Box, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import TechnologyChip from "./TechnologyChip";

const GlassContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(20, 0, 38, 0.4)",
  backdropFilter: "blur(12px)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(127, 100, 189, 0.2)",
  padding: "3rem",
  width: "65%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
    padding: "2rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "1.5rem",
    backgroundColor: "transparent",
    backdropFilter: "none",
    border: "none",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: "1.5rem",
  position: "relative",
  display: "inline-block",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: -8,
    left: 0,
    width: "40px",
    height: "3px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}));

const SkillCategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  marginBottom: "1rem",
  fontSize: "1.25rem",
}));

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Material UI",
];

const backendSkills = ["Node.js", "Express", "Python", "Java", ".NET"];

const dataSkills = ["SQL", "MongoDB", "Firebase"];

const cloudSkills = ["AWS", "Azure"];

const toolsSkills = ["Git", "GitHub", "Figma", "GitLab", "Jira", "Confluence"];

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 1.5rem",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "0 1.5rem",
  },
}));

const Skills = () => {
  const categories = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "Data", skills: dataSkills },
    { title: "Cloud", skills: cloudSkills },
    { title: "Tools", skills: toolsSkills },
  ];

  return (
    <StyledBox>
      <GlassContainer
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle variant="h3" fontWeight="bold">
          Skills
        </SectionTitle>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          {categories.map((cat, catIndex) => (
            <Grid key={cat.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <SkillCategoryTitle variant="h5">
                  {cat.title}
                </SkillCategoryTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <TechnologyChip technologyName={skill} />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </GlassContainer>
    </StyledBox>
  );
};

export default Skills;
