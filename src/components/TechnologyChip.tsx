import { Box } from "@mui/material";
import BadgeUrls from "../ChipUrls";

interface TechnologyChipProps {
  technologyName: string;
  projectsChip?: boolean;
}

const TechnologyChip = ({
  technologyName,
  projectsChip,
}: TechnologyChipProps) => {
  return (
    <Box
      component="img"
      alt={`${technologyName} logo`}
      src={BadgeUrls[technologyName]}
      sx={{
        borderRadius: "0.5rem",
        width: projectsChip ? "100%" : undefined,
      }}
    ></Box>
  );
};

export default TechnologyChip;
