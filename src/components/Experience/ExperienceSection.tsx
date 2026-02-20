import { Box, Stack, Typography } from "@mui/material";
import { JSX } from "react";
import { WorkExperienceType } from "../../types/types";
import TechnologyChip from "../TechnologyChip";

/**
 * Props for the ExperienceSection component.
 */
interface ExperienceSectionProps {
  positionDetails: WorkExperienceType;
}

/**
 * The ExperienceSection component renders the layout for a single work experience entry.
 *
 * @param {ExperienceSectionProps} props The component props
 * @returns {JSX.Element} The rendered component
 */
const ExperienceSection = ({
  positionDetails,
}: ExperienceSectionProps): JSX.Element => {
  return (
    <Stack spacing={1}>
      <Typography
        fontSize="1.5rem"
        fontWeight={600}
        color="secondary.main"
        textAlign="left"
      >
        {positionDetails.positionTitle}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h6" color="white" fontWeight={500}>
          {positionDetails.companyName}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, color: "white" }}>
          {positionDetails.startDate} - {positionDetails.endDate || "Present"}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography
          variant="body2"
          fontStyle="italic"
          sx={{ opacity: 0.7, color: "white" }}
        >
          {positionDetails.location}
        </Typography>
      </Stack>
      <Box mt={2}>
        <Typography sx={{ textAlign: "left" }}>
          {positionDetails.positionDescription}
        </Typography>
      </Box>
      <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} pt={1}>
        {positionDetails.skillChips.map((skillName) => (
          <TechnologyChip key={skillName} technologyName={skillName} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ExperienceSection;
