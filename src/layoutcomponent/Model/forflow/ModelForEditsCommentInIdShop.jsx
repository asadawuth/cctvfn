import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import Loading from "../../../layoutcomponent/Loading";

import TextError from "./../../TextError";

export default function ModelForEditsCommentInIdShop({
  oldDataComment,
  editCommentInShopId,
  onClose,
}) {
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [image, setImage] = useState([]);
  const [oldImage, setOldImage] = useState([]);
  const [removeImages, setRemoveImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (oldDataComment) {
      setComment(oldDataComment.comment || "");
      setScore(oldDataComment.score || 0);
      setOldImage(oldDataComment.image ? oldDataComment.image.split(",") : []);
    }
  }, [oldDataComment]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("comment", comment.trim());
      formData.append("score", score);
      if (removeImages) {
        formData.append("image", "null");
      } else if (image.length > 0) {
        image.forEach((image) => formData.append("image", image));
      }
      await editCommentInShopId(formData);
      onClose();
    } catch (error) {
      console.log("Error submitting from", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setError("อัปโหลดรูปภาพได้ไม่เกิน 5 รูป");
    } else {
      setError("");
      setImage(files);
      setOldImage([]);
      setRemoveImages(false);
    }
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="tw-w-full tw-border tw-rounded-lg tw-p-4 tw-mt-2 focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-outline-none"
            placeholder="เขียนความคิดเห็นของคุณ..."
          />
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
                  setScore(index + 1); // อัปเดตคะแนนใหม่
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
        </div>

        {/* รูปภาพ */}
        <div className="tw-mb-4">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">รูปภาพ</h3>
          <div className="tw-flex tw-gap-2">
            {removeImages
              ? ""
              : image.length > 0
              ? image.map((img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt={`new-${index}`}
                    className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg"
                  />
                ))
              : oldImage.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`old-${index}`}
                    className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg"
                  />
                ))}
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
            setImage([]);
          }}
          className="tw-bg-red-500 tw-text-white tw-py-1 tw-px-4 tw-mt-2"
        >
          ไม่ต้องการใช้รูป
        </button>

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
