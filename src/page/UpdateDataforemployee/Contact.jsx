import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";
export default function Contact() {
  const key = "Contact";
  const { t } = useTranslation();
  const [contact, setContact] = useState({});

  const dataContact = async () => {
    try {
      const res = await axios.get(
        `/dataUpdateforpopulation/datacompanies?key=${key}`
      );
      const data = res.data;
      const parsedValue = JSON.parse(data?.value || "{}");
      setContact(parsedValue);
    } catch (error) {
      console.error("Error fetching record data", error);
    }
  };

  useEffect(() => {
    dataContact();
  }, []);

  const updateDataContact = async (data) => {
    try {
      await axios.patch(`/dataUpdateforpopulation/updated?key=${key}`, data);
      await dataContact();
    } catch (error) {
      console.error("Error update Contact", error);
    }
  };

  const deleteImage = async (imageUrl) => {
    try {
      await axios.delete(
        `/dataUpdateforpopulation/datacompanies-deleteImage?key=${key}&imageUrl=${encodeURIComponent(
          imageUrl
        )}`
      );
      await dataContact();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const totalImage = contact.images?.length || 0;
  return (
    <>
      <HeaderMainMessage text={t("fileContact")} />
      <UpdateDateInputForm
        totalImage={totalImage}
        updateData={updateDataContact}
        oldText={contact.text}
      />
      <DataUpdateForEmployee data={contact} deleteImage={deleteImage} />
    </>
  );
}
