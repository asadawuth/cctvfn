import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import Loading from "../../../layoutcomponent/Loading";
import TextError from "../../../layoutcomponent/TextError";

export default function ModelForCommentShopUser({
  onClose,
  handlePostComment,
}) {
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textCommentError, setCommentError] = useState(false);
  const [filesImageError, setFilesImageError] = useState(false);
  const [textScoreError, setScoreError] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (score === 0) setScoreError(true);
    if (comment.trim() === "") setCommentError(true);
    if (files.length > 5) setFilesImageError(true);

    if (score === 0 || comment.trim() === "" || files.length > 5) {
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("comment", comment);
      formData.append("score", score);
      if (files.length > 0) {
        files.forEach((file) => formData.append("image", file));
      }
      await handlePostComment(formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length > 5) {
      setFilesImageError(true); // แจ้ง error รูปเกิน 5
      return;
    }
    setFilesImageError(false); // รีเซ็ต error หากรูปไม่เกิน 5
    setFiles(selectedFiles);
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmitForm}
        className="tw-overflow-y-auto tw-max-h-[75vh] tw-px-6 tw-py-4"
      >
        {/* ข้อความ */}
        <div className="tw-mb-6">
          <label className="tw-text-lg tw-font-bold tw-text-gray-800">
            ข้อความ
          </label>
          <textarea
            rows="4"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setCommentError(false); // ซ่อน error เมื่อกรอกข้อความ
            }}
            className={`tw-w-full tw-border tw-rounded-lg tw-p-4 tw-mt-2 focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-outline-none ${
              textCommentError ? "tw-border-red-500" : ""
            }`}
            placeholder="เขียนความคิดเห็นของคุณ..."
          />
          {textCommentError && <TextError text="กรุณากรอกข้อความ" />}
        </div>

        {/* ให้คะแนน */}
        <div className="tw-mb-6">
          <label className="tw-text-lg tw-font-bold tw-text-gray-800">
            ให้คะแนน
          </label>
          <div className="tw-flex tw-gap-2 tw-mt-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setScore(index + 1);
                  setScoreError(false); // ซ่อน error เมื่อเลือกคะแนน
                }}
                className="tw-cursor-pointer"
              >
                {score > index ? (
                  <AiFillStar className="tw-text-3xl tw-text-yellow-400" />
                ) : (
                  <AiOutlineStar className="tw-text-3xl tw-text-gray-400" />
                )}
              </div>
            ))}
          </div>
          {textScoreError && <TextError text="กรุณาให้คะแนน" />}
        </div>

        {/* รูปภาพ */}
        <div className="tw-mb-6">
          <label className="tw-text-lg tw-font-bold tw-text-gray-800">
            รูปภาพ
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className={`tw-w-full tw-border tw-rounded-lg tw-p-2 tw-mt-2 ${
              filesImageError ? "tw-border-red-500" : ""
            }`}
            onChange={handleImageUpload}
          />
          <p className="tw-text-sm tw-text-gray-500 tw-mt-2">
            ** อัปโหลดได้สูงสุด 5 รูป
          </p>
          {filesImageError && (
            <TextError text="คุณสามารถอัปโหลดรูปภาพได้สูงสุด 5 รูป" />
          )}
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="tw-flex tw-justify-center tw-gap-4">
          <button
            type="submit"
            className="tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg tw-font-bold hover:tw-bg-blue-700 hover:tw-shadow-lg tw-transition-all tw-duration-300"
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </>
  );
}
