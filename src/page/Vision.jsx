import Layout1 from "./../layoutcomponent/Forvision/Layout1";
import HeaderMainMessage from "./../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";

export default function Vision() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("vision")} />
      <Layout1 />
    </>
  );
}
