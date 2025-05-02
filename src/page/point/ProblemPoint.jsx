import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function ProblemPoint() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <HeaderMainMessage text={t("inconponentProblemPoint")} />
      <LayoutText text={t("inconponentProblemPointText1")} style="tw-text-xl" />
      <LayoutText text={t("inconponentProblemPointText2")} style="tw-text-xl" />
    </>
  );
}
