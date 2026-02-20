import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import {
  Box,
  styled,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ExperienceSection from "./ExperienceSection";
import { WorkExperienceType } from "../../types/types";

/**
 * A styled Card component for the experience section.
 */
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
    padding: "1.25rem",
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

/**
 * The work experience entries
 */
const workExperience: WorkExperienceType[] = [
  {
    positionTitle: "Software Development & QA Engineer",
    companyName: "BOA Hydraulics",
    workType: "Full-time",
    startDate: "Nov 2024",
    endDate: null,
    location: "Auckland, NZ",
    positionDescription: (
      <Stack gap={1}>
        <Typography sx={{ color: "white" }}>
          As a Software Development & QA Engineer working primarily in web
          development, I contribute to the design, development, delivery and
          validation of the web platform of the BOAhub application.
        </Typography>
        <Typography sx={{ color: "white" }}>
          I also have delivered many internal tools and web applications used by
          the company to optimise processes and improve efficiency.
        </Typography>
      </Stack>
    ),
    skillChips: [
      "React",
      "TypeScript",
      "Python",
      "SQL",
      "AWS",
      "Figma",
      "Confluence",
    ],
  },
  {
    positionTitle: "Software Engineering Intern",
    companyName: "Kusol Labs Limited",
    workType: "Full-time",
    startDate: "Nov 2023",
    endDate: "Feb 2024",
    location: "Auckland, NZ (Remote)",
    positionDescription: (
      <Box>
        <Typography sx={{ color: "white" }}>
          Full-stack web development role, where I was responsible for
          developing and deploying the frontend and backends of multiple web
          applications for multiple clients.
        </Typography>
      </Box>
    ),
    skillChips: [
      "React",
      "HTML",
      "CSS",
      "Python",
      "Django",
      "Flask",
      "SQL",
      "Azure",
    ],
  },
  {
    positionTitle: "Software Development Intern",
    companyName: "Figured",
    workType: "Full-time",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    location: "Auckland, NZ",
    positionDescription: (
      <Box>
        <Typography sx={{ color: "white" }}>
          Full-stack web development role, where I was responsible for
          developing the main web application for Figured, using Laravel and
          Vue.
        </Typography>
      </Box>
    ),
    skillChips: ["Vue", "PHP", "Laravel", "SQL"],
  },
  {
    positionTitle: "Software Engineering Intern",
    companyName: "Kusol Labs Limited",
    workType: "Full-time",
    startDate: "Nov 2021",
    endDate: "Feb 2022",
    location: "Auckland, NZ (Remote)",
    positionDescription: (
      <Box>
        <Typography sx={{ color: "white" }}>
          Frontend web development role, where I was responsible for developing
          and deploying the frontend of multiple web applications for multiple
          clients.
        </Typography>
      </Box>
    ),
    skillChips: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    positionTitle: "Software Engineering Intern",
    companyName: "Spark New Zealand",
    workType: "Full-time",
    startDate: "Dec 2018",
    endDate: "Feb 2019",
    location: "Auckland, NZ",
    positionDescription: (
      <Box>
        <Typography sx={{ color: "white" }}>
          Frontend web development role, where I designed, developed and tested
          an online software deployment calendar, with the goal of automating
          operational development procedures at Spark NZ.
        </Typography>
      </Box>
    ),
    skillChips: ["React", "HTML", "CSS", "JavaScript"],
  },
];

/**
 * The Experience component renders the experience section of the page.
 *
 * @returns {JSX.Element} The rendered component
 */
const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <GlassContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle variant="h3" fontWeight="bold">
        Experience
      </SectionTitle>
      <Timeline
        position={isMobile ? "right" : "alternate-reverse"}
        sx={{
          p: 0,
          ...(isMobile
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : {}),
        }}
      >
        {workExperience.map((position, index) => (
          <TimelineItem
            key={position.positionTitle + position.startDate}
            sx={{
              paddingTop: index > 0 && isMobile ? "1rem" : "0",
              minHeight: "120px",
            }}
          >
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color="primary"
                sx={{
                  borderWidth: "2px",
                  boxShadow: `0 0 10px ${theme.palette.primary.main}44`,
                }}
              />
              {index !== workExperience.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: "rgba(127, 100, 189, 0.4)",
                    width: "2px",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExperienceSection positionDetails={position} />
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </GlassContainer>
  );
};

export default Experience;
