import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";

export default function Record() {
  const key = "Record";
  const { t } = useTranslation();
  const [record, setRecord] = useState({});

  const dataRecord = async () => {
    try {
      const res = await axios.get(
        `/dataUpdateforpopulation/datacompanies?key=${key}`
      );
      const data = res.data;
      const parsedValue = JSON.parse(data?.value || "{}");
      setRecord(parsedValue);
    } catch (error) {
      console.error("Error fetching record data", error);
    }
  };

  useEffect(() => {
    dataRecord(); // ✅ เรียกเมื่อโหลดหน้า
  }, []);

  const updateDataRecord = async (data) => {
    try {
      await axios.patch(`/dataUpdateforpopulation/updated?key=${key}`, data);
      await dataRecord();
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
      await dataRecord();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const totalImage = record.images?.length || 0;
  return (
    <>
      <HeaderMainMessage text={t("fileRecord")} />
      <UpdateDateInputForm
        totalImage={totalImage}
        updateData={updateDataRecord}
        oldText={record.text}
      />
      <DataUpdateForEmployee data={record} deleteImage={deleteImage} />
    </>
  );
}
