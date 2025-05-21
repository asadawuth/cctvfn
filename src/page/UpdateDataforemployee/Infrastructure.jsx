import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";
export default function Infrastructure() {
  const key = "InfrastructureInformation";
  const { t } = useTranslation();
  const [infrastructure, setinfrastructure] = useState({});

  const dataInFrastructure = async () => {
    try {
      const res = await axios.get(
        `/dataUpdateforpopulation/datacompanies?key=${key}`
      );
      const data = res.data;
      const parsedValue = JSON.parse(data?.value || "{}");
      setinfrastructure(parsedValue);
    } catch (error) {
      console.error("Error fetching infrastructure", error);
    }
  };

  useEffect(() => {
    dataInFrastructure();
  }, []);

  const dateDataInfrastructure = async (data) => {
    try {
      await axios.patch(`/dataUpdateforpopulation/updated?key=${key}`, data);
      await dataInFrastructure();
    } catch (error) {
      console.error("Error update Infrastructue", error);
    }
  };

  const deleteImage = async (imageUrl) => {
    try {
      await axios.delete(
        `/dataUpdateforpopulation/datacompanies-deleteImage?key=${key}&imageUrl=${encodeURIComponent(
          imageUrl
        )}`
      );
      await dataInFrastructure();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const totalImage = infrastructure.images?.length || 0;
  return (
    <>
      <HeaderMainMessage text={t("fileInfrastructure")} />
      <UpdateDateInputForm
        totalImage={totalImage}
        updateData={dateDataInfrastructure}
        oldText={infrastructure.text}
      />
      <DataUpdateForEmployee data={infrastructure} deleteImage={deleteImage} />
    </>
  );
}
