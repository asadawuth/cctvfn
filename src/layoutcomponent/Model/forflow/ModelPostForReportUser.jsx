import { useState } from "react";
import Loading from "../../../layoutcomponent/Loading";
import { useTranslation } from "react-i18next";
import TextError from "../../TextError";

export default function ModelPostForReportUser({
  handleCreateCommentIdUserReportId,
  onClose,
}) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState(false);
  const [filesError, setFilesError] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (text.trim() === "") setTextError(true);
    if (filesError.length > 3) setFilesError(true);
    if (text.trim() === "" || files.length > 3) {
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);

      files.forEach((file) => formData.append("image", file));
      if (video) {
        formData.append("video", video);
      }
      await handleCreateCommentIdUserReportId(formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setFilesError(selectedFiles.length > 3);
  };

  const handleVideoUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setVideo(selectedFile);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form onSubmit={handleSubmitForm}>
        <div className="tw-mb-4">
          <h6 className="tw-text-red-500 tw-font-medium">
            {t("respondUserReportText1")}
          </h6>
          <h6 className="tw-text-red-500 tw-font-medium">
            {" "}
            {t("respondUserReportText2")}
          </h6>
          <h6 className="tw-text-red-500 tw-font-medium">
            {t("respondUserReportText3")}
          </h6>
        </div>

        {/* ส่วนสำหรับเพิ่มรูปภาพ */}
        <div className="tw-mb-4 tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">
            {t("respondUserReportText4")}
          </h3>
          <input
            type="file"
            accept="image/*"
            multiple
            className={`tw-w-full tw-border tw-border-gray-300 ${
              filesError ? "tw-border-red-500" : ""
            } tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500`}
            onChange={handleImageUpload}
          />
          <p className="tw-text-sm tw-text-gray-500 tw-mt-2">
            {t("respondUserReportText5")}
          </p>
          {filesError && (
            <div className="tw-pl-2">
              <TextError text={t("respondUserReportTexterror1")} />
            </div>
          )}
        </div>

        {/* ส่วนสำหรับเพิ่มวิดีโอ */}
        <div className="tw-mb-4 tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">
            {t("respondUserReportText6")}
          </h3>
          <input
            type="file"
            accept="video/*"
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            onChange={handleVideoUpload}
          />
          <p className="tw-text-sm tw-text-gray-500 tw-mt-2">
            {t("respondUserReportText7")}
          </p>
        </div>

        {/* ส่วนข้อความ */}
        <div className=" tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">
            {" "}
            {t("respondUserReportText8")}
          </h3>
          <textarea
            name="text"
            value={text}
            onChange={(e) => {
              const value = e.target.value;
              setText(value);
              if (value.trim() !== "") {
                setTextError(false); // ลบ error เมื่อเริ่มพิมพ์
              }
            }}
            rows="4"
            className={`tw-w-full ${textError ? "tw-border-red-500" : ""} 
            ${text.length > 0 ? "tw-border-gray-300" : ""}
             tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-text-base tw-shadow-sm focus:tw-outline-none `}
          />
          {textError && (
            <div className="tw-pl-2">
              <TextError text={t("respondUserReportTexterror2")} />
            </div>
          )}
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            className="tw-bg-gradient-to-r tw-text-lg tw-font-semibold tw-text-white tw-px-10 tw-py-3 tw-rounded-xl tw-shadow-lg hover:tw-scale-105 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-bg-blue-500 hover:tw-bg-blue-600"
          >
            {t("statusUserReportBt")}
          </button>
        </div>
      </form>
    </>
  );
}
