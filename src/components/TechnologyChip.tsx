import { Box } from "@mui/material";
import BadgeUrls from "../ChipUrls";

interface TechnologyChipProps {
  technologyName: string;
}

const TechnologyChip = ({ technologyName }: TechnologyChipProps) => {
  return (
    <Box
      component="img"
      alt={`${technologyName} logo`}
      src={BadgeUrls[technologyName]}
      sx={{
        borderRadius: "0.5rem",
      }}
    ></Box>
  );
};

export default TechnologyChip;
