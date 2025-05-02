import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import Layoutone from "../layoutcomponent/ProblemSoftwareHardware/Layoutone";
import LayoutTwoMap from "../layoutcomponent/ProblemSoftwareHardware/LayoutTwoMap";
import LayoutThreeContactTeamDevIt from "../layoutcomponent/ProblemSoftwareHardware/LayoutThreeContactTeamDevIt";
import { useTranslation } from "react-i18next";
export default function ProblemSoftwareHardware() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("inconponentProblemSoftwareHardware")} />
      <Layoutone />
      <LayoutTwoMap />
      <LayoutThreeContactTeamDevIt />
    </>
  );
}
