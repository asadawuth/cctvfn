import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading";
import axios from "../../logic/config/axios";
import TextError from "../TextError";

export default function UpdateDateInputForm() {
  const { t } = useTranslation();
  const [text, setText] = useState({ text: "" });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState(false);
  const [filesError, setFilesError] = useState(false);

  const changeInput = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 1) {
      return;
    }
    setFiles(selectedFiles);
  };

  const handleUpdateRecord = async (data) => {
    try {
      await axios.patch(``, data);
    } catch (error) {
      console.error("Error update Record", error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);
      files.forEach((file) => formData.append("image", file));
      await handleUpdateRecord(formData);
    } catch (error) {
      console.error("Error submit Form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}

      <form
        onSubmit={handleSubmitForm}
        className="tw-py-2 tw-bg-gray-100 tw-px-14 sm:tw-px-28 md:tw-px-56 lg:tw-px-80 2xl:tw-px-96"
      >
        <div className="tw-bg-white tw-rounded-2xl   tw-flex tw-flex-col tw-gap-6 tw-p-4">
          <h1 className="tw-text-sm tw-font-serif tw-text-center tw-text-gray-800">
            {t("UpdateDateInputFormText1")}
          </h1>

          <textarea
            type="text"
            name="text"
            rows="8"
            value={text.text}
            onChange={changeInput}
            placeholder={t("UpdateDateInputFormText2")}
            className="tw-border tw-rounded-lg tw-px-4 tw-py-2 tw-text-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-text-xl"
          />
          {textError && <TextError />}
          <input
            type="file"
            accept="image/*"
            multiple
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            onChange={handleImageUpload}
          />
          <TextError />
          <button
            type="submit"
            className="tw-bg-blue-600 tw-text-white tw-py-2 tw-rounded-lg tw-shadow-md hover:tw-bg-blue-700 transition-all"
          >
            {t("UpdateDateInputFormText3")}
          </button>
        </div>
      </form>
    </>
  );
}
