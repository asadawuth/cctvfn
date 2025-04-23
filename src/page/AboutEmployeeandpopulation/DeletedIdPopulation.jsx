import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import DeletedIdPopulationForm from "../../layoutcomponent/Aboutemployee&&population/DeletedIdPopulationForm";
import { useTranslation } from "react-i18next";
export default function DeletedIdPopulation() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("inconponentDeleteIdPopulation")} />
      <DeletedIdPopulationForm />
    </>
  );
}
