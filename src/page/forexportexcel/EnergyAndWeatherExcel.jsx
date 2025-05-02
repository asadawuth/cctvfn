import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import SeachDataForSaveExcel from "../../layoutcomponent/forExcel/SeachDataForSaveExcel";
import { useState } from "react";
import axios from "../../logic/config/axios";
import { useTranslation } from "react-i18next";

export default function EnergyAndWeatherExcel() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    start: "",
    end: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const latesFileExcelUpdate = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderMainMessage text={t("inconponentEnergyAndWeatherExcel")} />
      <SeachDataForSaveExcel
        latesFileExcelUpdate={latesFileExcelUpdate}
        onChange={onChange}
        data={data}
      />
    </>
  );
}
