import { ReactNode } from "react";

export type WorkExperienceType = {
  positionTitle: string;
  companyName: string;
  workType: string;
  startDate: string;
  endDate: string | null;
  location: string;
  positionDescription: ReactNode;
  skillChips: string[];
};
