import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";
export default function ExecutiveStructure() {
  const key = "Structure";
  const { t } = useTranslation();
  const [structure, setStructure] = useState({});

  const dataStructure = async () => {
    try {
      const res = await axios.get(
        `/dataUpdateforpopulation/datacompanies?key=${key}`
      );
      const data = res.data;
      const parsedValue = JSON.parse(data?.value || "{}");
      setStructure(parsedValue);
    } catch (error) {
      console.error("Error fetching Structure", error);
    }
  };

  useEffect(() => {
    dataStructure();
  }, []);

  const updateDateExecutiveStructure = async (data) => {
    try {
      await axios.patch(`/dataUpdateforpopulation/updated?key=${key}`, data);
      await dataStructure();
    } catch (error) {
      console.error("Error update Structure", error);
    }
  };

  const deleteImage = async (imageUrl) => {
    try {
      await axios.delete(
        `/dataUpdateforpopulation/datacompanies-deleteImage?key=${key}&imageUrl=${encodeURIComponent(
          imageUrl
        )}`
      );
      await dataRecord();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const totalImage = structure.images?.length || 0;
  return (
    <>
      <HeaderMainMessage text={t("fileExecutiveStructure")} />
      <UpdateDateInputForm
        totalImage={totalImage}
        updateData={updateDateExecutiveStructure}
        oldText={structure.text}
      />
      <DataUpdateForEmployee data={structure} deleteImage={deleteImage} />
    </>
  );
}
