import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading";
import Model from "../../layoutcomponent/Model";
import ModelForUpdateRecordDataforemployee from "../Model/forflow/ModelForUpdateRecordDataforemployee";
import TextError from "../TextError";

export default function UpdateDateInputForm({
  updateData,
  oldText,
  totalImage,
}) {
  const { t } = useTranslation();
  const [text, setText] = useState({ text: oldText || "" });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [errorTextImage, setErrorTextImage] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    if (oldText) {
      setText({ text: oldText });
    }
  }, [oldText]);

  const changeInput = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (totalImage + selectedFiles.length > 5) {
      setErrorTextImage(true);
      return;
    }

    setFiles(selectedFiles);
    setErrorFiles(false); // ✅ ถ้าไม่เกิน 5 รูป ให้ล้าง error
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (text.text.length === 0) {
      setErrorText(true);
    }
    try {
      const formData = new FormData();
      formData.append("text", text.text);
      files.forEach((file) => formData.append("images", file));
      for (let [key, val] of formData.entries()) {
        console.log(`${key}:`, val);
      }

      await updateData(formData);
    } catch (error) {
      console.error("Error submit Form", error);
    } finally {
      setText({ text: "" });
      setFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input
      }
      setLoading(false);
      setOpenModel(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="tw-py-2 tw-bg-gray-100 tw-px-14 sm:tw-px-28 md:tw-px-56 lg:tw-px-80 2xl:tw-px-96">
        <div className="tw-bg-white tw-rounded-2xl tw-flex tw-flex-col tw-gap-6 tw-p-4">
          <h1 className="tw-text-sm tw-font-serif tw-text-center tw-text-gray-800">
            {t("UpdateDateInputFormText1")}
          </h1>

          <textarea
            name="text"
            rows="8"
            value={text.text}
            onChange={changeInput}
            placeholder={t("UpdateDateInputFormText2")}
            className={`tw-border tw-rounded-lg tw-px-4 tw-py-2 tw-text-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-text-xl
              ${
                errorText
                  ? "focus:tw-ring-2 tw-border-2 tw-border-red-500"
                  : "focus:tw-ring-2 focus:tw-ring-blue-500 tw-border-2 tw-border-blue-500"
              }`}
          />
          {errorText && (
            <TextError
              text={t("UpdateDateInputFormTextError")}
              style="tw-pl-2"
            />
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            onChange={handleImageUpload}
          />
          {errorTextImage && (
            <TextError
              text="ใส่รูปได้สูงสุด 5 รูปเท่านั้น รวมข้อมูลภาพเก่าด้วย"
              style="tw-pl-2"
            />
          )}
          <button
            type="button"
            onClick={() => setOpenModel(true)}
            className="tw-bg-blue-600 tw-text-white tw-py-2 tw-rounded-lg tw-shadow-md hover:tw-bg-blue-700 transition-all"
          >
            {t("UpdateDateInputFormText3")}
          </button>
        </div>
      </div>
      <Model
        title={t("ModelForDataUpdateForEmployeeTitle")}
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelForUpdateRecordDataforemployee
          onClose={() => setOpenModel(false)}
          Submit={handleSubmitForm}
        />
      </Model>
    </>
  );
}
