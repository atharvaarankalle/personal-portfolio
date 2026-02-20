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
  Card,
  CardContent,
  styled,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExperienceSection from "./ExperienceSection";
import { WorkExperienceType } from "../../types/types";

/**
 * A styled Card component for the experience section.
 */
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  opacity: 0.9,
  color: "#FFFFFF",
  width: "65%",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: "0.2rem",
  },
}));

/**
 * A styled Typography component for the experience section.
 */
const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingBottom: "2rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    paddingBottom: "1rem",
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
        <Typography>
          As a Software Development & QA Engineer working primarily in web
          development, I contribute to the design, development, delivery and
          validation of the web platform of the BOAhub application.
        </Typography>
        <Typography>
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
        <Typography>
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
        <Typography>
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
        <Typography>
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
        <Typography>
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
    <StyledCard>
      <CardContent>
        <StyledTypography variant="h3" fontWeight="bold">
          Experience
        </StyledTypography>
        <Timeline
          position={isMobile ? "right" : "alternate-reverse"}
          sx={
            isMobile
              ? {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }
              : {}
          }
        >
          {workExperience.map((position, index) => (
            <TimelineItem
              key={position.positionTitle + position.startDate}
              sx={{ paddingTop: index > 0 && isMobile ? "1rem" : "0" }}
            >
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  color="secondary"
                  sx={{ borderWidth: "2px" }}
                />
                <TimelineConnector sx={{ bgcolor: "mutedPurple.main" }} />
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceSection positionDetails={position} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </StyledCard>
  );
};

export default Experience;
