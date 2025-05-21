import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";

export default function Vision2() {
  const key = "Vision";
  const { t } = useTranslation();
  const [vision, setVision] = useState({});

  const dataVision = async () => {
    try {
      const res = await axios.get(
        `/dataUpdateforpopulation/datacompanies?key=${key}`
      );
      const data = res.data;
      const parsedValue = JSON.parse(data?.value || "{}");
      setVision(parsedValue);
    } catch (error) {
      console.error("Error fetching record data", error);
    }
  };

  useEffect(() => {
    dataVision();
  }, []);

  const updateDataVision = async (data) => {
    try {
      await axios.patch(`/dataUpdateforpopulation/updated?key=${key}`, data);
      await dataVision();
    } catch (error) {
      console.error("Error update Record", error);
    }
  };

  const deleteImage = async (imageUrl) => {
    try {
      await axios.delete(
        `/dataUpdateforpopulation/datacompanies-deleteImage?key=${key}&imageUrl=${encodeURIComponent(
          imageUrl
        )}`
      );
      await dataVision();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const totalImage = vision.images?.length || 0;
  return (
    <>
      <HeaderMainMessage text={t("fileVision2")} />
      <UpdateDateInputForm
        totalImage={totalImage}
        updateData={updateDataVision}
        oldText={vision.text}
      />
      <DataUpdateForEmployee data={vision} deleteImage={deleteImage} />
    </>
  );
}
