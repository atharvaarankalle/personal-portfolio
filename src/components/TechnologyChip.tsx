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
        "@media (max-width: 550px)": {
          width: projectsChip ? "80%" : undefined,
        }
      }}
    ></Box>
  );
};

export default TechnologyChip;
