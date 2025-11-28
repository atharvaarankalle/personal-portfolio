import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";
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
  "@media (max-width: 550px)": {
    width: "75%",
  },
}));

/**
 * A styled Typography component for the experience section.
 */
const StyledTypography = styled(Typography)({
  paddingBottom: "2rem",
  "@media (max-width: 1200px)": {
    fontSize: "2rem",
  },
});

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
      <Box>
        <Typography>
          As a Software Development & QA Engineer working primarily in web
          development, I contribute to the design, development, delivery and
          validation of the web platform of the BOAhub application.
        </Typography>
      </Box>
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
    skillChips: ["React"],
  },
];

/**
 * The Experience component renders the experience section of the page.
 *
 * @returns {JSX.Element} The rendered component
 */
const Experience = () => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography variant="h3" fontWeight="bold">
          Experience
        </StyledTypography>
        <Timeline position="alternate-reverse">
          {workExperience.map((position) => (
            <TimelineItem key={position.positionTitle + position.startDate}>
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
