import Layout1 from "../layoutcomponent/Formanual/Layout1Vdo";
import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";

export default function Manual() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("inconponentManual")} />
      <Layout1 />
    </>
  );
}
