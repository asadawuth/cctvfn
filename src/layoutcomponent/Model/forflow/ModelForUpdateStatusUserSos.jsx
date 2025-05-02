import { useState } from "react";
import axios from "../../../logic/config/axios";
import TextError from "../../TextError";
import { useTranslation } from "react-i18next";

export default function ModelForUpdateStatusUserSos({
  id,
  onClose,
  setDataSos,
}) {
  const { t } = useTranslation();
  const [inputStatus, setInputStatus] = useState({
    status: "",
  });
  const [textError, setTextError] = useState(false);
  console.log(id);
  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (inputStatus.status === "") {
      setTextError(true);
      return;
    }

    try {
      const res = await axios.patch(`/voicesos/updatestatusidsosvoice/${id}`, {
        status: inputStatus.status,
      });
      if (res.status === 200) {
        setDataSos((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: inputStatus.status } : item
          )
        );

        onClose();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setTextError(true); // แสดงข้อความ error
    }
  };
  const handleChangeInput = (e) => {
    setInputStatus({
      ...inputStatus,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleOnSubmitForm} className="tw-w-full tw-p-4">
        <label
          htmlFor="status"
          className="tw-block tw-text-lg tw-font-medium tw-text-gray-700 tw-mb-2"
        >
          {t("ModelForUpdateStatusUserSosText2")}
        </label>
        <select
          type="text"
          name="status"
          className="tw-border tw-border-gray-300 tw-rounded-md tw-px-4 tw-py-2 tw-w-full tw-bg-white tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-1 focus:tw-ring-blue-500 focus:tw-outline-none tw-text-gray-800"
          onChange={handleChangeInput}
          value={inputStatus.status}
        >
          <option value="แจ้ง"> {t("ModelForUpdateStatusUserSosText3")}</option>
          <option value="รับแจ้งแล้ว">
            {" "}
            {t("ModelForUpdateStatusUserSosText4")}
          </option>
          <option value="กำลังดำเนินการ">
            {" "}
            {t("ModelForUpdateStatusUserSosText5")}
          </option>
          <option value="จัดการเร็จสิ้น">
            {" "}
            {t("ModelForUpdateStatusUserSosText6")}
          </option>
          <option value="ยกเลิก">
            {" "}
            {t("ModelForUpdateStatusUserSosText7")}
          </option>
        </select>
        <div className="tw-pt-4">
          {textError && <TextError text="โปรดระบุ" />}
        </div>
        <button
          type="submit"
          className="tw-mt-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-md tw-shadow-md hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-outline-none"
        >
          {t("ModelForUpdateStatusUserSosText8")}
        </button>
      </form>
    </>
  );
}
