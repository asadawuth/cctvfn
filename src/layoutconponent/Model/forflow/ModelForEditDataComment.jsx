import { useState, useEffect } from "react";
import TextError from "./../../TextError";
import Loading from "../../../layoutconponent/Loading";

export default function ModelForEditDataComment({
  oldDataComment,
  onClose,
  editCommentInUserReportId,
}) {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [removeImages, setRemoveImages] = useState(false); // สถานะลบรูป
  const [video, setVideo] = useState(null);
  const [oldVideo, setOldVideo] = useState("");
  const [removeVideo, setRemoveVideo] = useState(false); // สถานะลบวิดีโอ
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (oldDataComment) {
      setText(oldDataComment.text || "");
      setOldImages(oldDataComment.image ? oldDataComment.image.split(",") : []);
      setOldVideo(oldDataComment.vdo || "");
    }
  }, [oldDataComment]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("text", text.trim());

      if (removeImages) {
        formData.append("image", "null");
      } else if (images.length > 0) {
        images.forEach((image) => formData.append("image", image));
      }

      if (removeVideo) {
        formData.append("video", "null");
      } else if (video) {
        formData.append("video", video);
      }

      // console.log("FormData Entries:", [...formData.entries()]);
      await editCommentInUserReportId(formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      setError("อัปโหลดรูปภาพได้ไม่เกิน 3 รูป");
    } else {
      setError("");
      setImages(files);
      setOldImages([]); // เคลียร์รูปเก่า
      setRemoveImages(false);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setOldVideo("");
      setRemoveVideo(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmitForm}
        className="tw-overflow-y-auto tw-max-h-[75vh] tw-px-4 tw-py-2"
      >
        {/* ข้อความ */}
        <div className="tw-mb-4">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">ข้อความ</h3>
          <textarea
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="tw-w-full tw-border tw-rounded-lg tw-p-4 focus:tw-ring-blue-500"
          />
        </div>

        {/* รูปภาพ */}
        <div className="tw-mb-4">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">รูปภาพ</h3>
          <div className="tw-flex tw-gap-2">
            {removeImages ? (
              <p className="tw-text-red-500">รูปภาพจะถูกลบ</p>
            ) : images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`new-${index}`}
                  className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg"
                />
              ))
            ) : (
              oldImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`old-${index}`}
                  className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg"
                />
              ))
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="tw-mt-2"
          />
          {error && <TextError text={error} />}
        </div>
        <button
          type="button"
          onClick={() => {
            setRemoveImages(true);
            setImages([]);
          }}
          className="tw-bg-red-500 tw-text-white tw-py-1 tw-px-4 tw-mt-2"
        >
          ไม่ต้องการใช้รูป
        </button>
        {/* วิดีโอ */}
        <div className="tw-mb-4">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">วิดีโอ</h3>
          {removeVideo ? (
            <p className="tw-text-red-500">วิดีโอจะถูกลบ</p>
          ) : video ? (
            <video
              src={URL.createObjectURL(video)}
              controls
              className="tw-w-full tw-rounded-lg"
            />
          ) : (
            oldVideo && (
              <video
                src={oldVideo}
                controls
                className="tw-w-full tw-rounded-lg"
              />
            )
          )}
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="tw-mt-2"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setRemoveVideo(true);
            setVideo(null);
          }}
          className="tw-bg-red-500 tw-text-white tw-py-1 tw-px-4 tw-mt-2"
        >
          ไม่ต้องการใช้วิดีโอ
        </button>

        {/* ปุ่มยืนยัน */}
        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600"
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </>
  );
}
