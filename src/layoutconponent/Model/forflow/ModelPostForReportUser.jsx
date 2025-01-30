import { useState } from "react";
import Loading from "../../../layoutconponent/Loading";

export default function ModelPostForReportUser({
  handleCreateCommentIdUserReportId,
  onClose,
}) {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
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
    if (selectedFiles.length > 3) {
      return;
    }
    setFiles(selectedFiles);
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
            ** ระบุรูปได้สูงสุด 3
          </h6>
          <h6 className="tw-text-red-500 tw-font-medium">** ระบุวีดีโอได้ 1</h6>
          <h6 className="tw-text-red-500 tw-font-medium">
            ** ต้องระบุรูปวีดีโอข้อความอย่างน้อยอย่างใดอย่างนึง
          </h6>
        </div>

        {/* ส่วนสำหรับเพิ่มรูปภาพ */}
        <div className="tw-mb-4 tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">
            เพิ่มรูปภาพ
          </h3>
          <input
            type="file"
            accept="image/*"
            multiple
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            onChange={handleImageUpload}
          />
          <p className="tw-text-sm tw-text-gray-500 tw-mt-2">
            ** รองรับไฟล์รูปภาพ (PNG, JPG, JPEG) ไม่เกิน 3 ไฟล์
          </p>
        </div>

        {/* ส่วนสำหรับเพิ่มวิดีโอ */}
        <div className="tw-mb-4 tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">
            เพิ่มวีดีโอ
          </h3>
          <input
            type="file"
            accept="video/*"
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            onChange={handleVideoUpload}
          />
          <p className="tw-text-sm tw-text-gray-500 tw-mt-2">
            ** รองรับไฟล์วีดีโอ (MP4, MOV, AVI) ไม่เกิน 1 ไฟล์
          </p>
        </div>

        {/* ส่วนข้อความ */}
        <div className="tw-mb-4 tw-p-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">ข้อความ</h3>
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="4"
            className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
          />
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            className="tw-bg-gradient-to-r tw-text-lg tw-font-semibold tw-text-white tw-px-10 tw-py-3 tw-rounded-xl tw-shadow-lg hover:tw-scale-105 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-bg-blue-500 hover:tw-bg-blue-600"
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </>
  );
}
