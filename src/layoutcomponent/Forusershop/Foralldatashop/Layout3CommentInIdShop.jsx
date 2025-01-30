import { MdEditSquare } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import blank from "../../../assets/foruserreport/blank.png";
import Model from "../../Model";
import ModelForOpenImages from "../../Model/forflow/ModelForOpenImages";
import ModelForDeleteInShopId from "../../Model/forflow/ModelForDeleteInShopId";
import ModelForEditsCommentInIdShop from "../../Model/forflow/ModelForEditsCommentInIdShop";
import { useState } from "react";
import formatTimeAgo from "../../../logic/utils/time-ago";
import { useAuth } from "../../../logic/hook/user-auth";
import axios from "../../../logic/config/axios";

export default function Layout3CommentInIdShop({
  comment,
  shopId,
  handleDeleteCommentId,
  fetchCommentData,
}) {
  const { authUser } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [openEditCommentModel, setOpenEditCommentModel] = useState(false);
  const [openDeleteCommentModel, setOpenDeleteCommentModel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oldDataComment, setOldDataComment] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const oldDataCommentId = async (id) => {
    setSelectedCommentId(id);
    try {
      const response = await axios.get(
        `/commentsshop/datacommentinshopid/${shopId}/${id}`
      );
      setOldDataComment(response.data);
      setOpenEditCommentModel(true);
    } catch (error) {
      console.error("Error fetching old comment data", error);
    }
  };

  const editCommentInShopId = async (formData) => {
    try {
      if (!shopId || !selectedCommentId) {
        throw new Error("Report ID หรือ Comment ID ไม่ถูกต้อง");
      }

      await axios.patch(
        `/commentsshop/editsdatacommentid/${shopId}/${selectedCommentId}`,
        formData
      );
      await fetchCommentData();
    } catch (error) {
      console.error("Error editing commentInShopId", error.message);
    }
  };

  const openModalWithIndex = (images, index) => {
    setSelectedImages(images.split(",").map((url) => url.trim()));
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const handleDeleteComment = (id) => {
    setSelectedCommentId(id);
    setOpenDeleteCommentModel(true);
  };
  return (
    <>
      <hr />
      <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-mb-6 tw-px-2">
        {comment.map((data) => (
          <div
            className="tw-bg-slate-100 md:tw-w-4/6 lg:tw-w-3/6 xl:tw-w-3/6 tw-rounded-2xl tw-mt-4"
            key={data.id}
          >
            {/* profile firstname lastname timeago */}
            <div className="tw-flex tw-justify-between">
              <div className="tw-flex tw-p-4 tw-gap-4">
                <div>
                  <img
                    loading="lazy"
                    src={data.user.profile || blank}
                    alt="profile"
                    className="tw-rounded-full tw-h-16 tw-w-16 tw-border-4 tw-border-gray-300 hover:tw-cursor-pointer"
                  />
                </div>
                <div>
                  <div className="tw-flex tw-gap-4">
                    <h3>{data.user.firstName} </h3>
                    <h3>{data.user.lastName}</h3>
                  </div>
                  <div> {formatTimeAgo(data.createdAt)}</div>
                </div>
              </div>

              {authUser.id === data.user.id && (
                <div className="tw-pr-4 tw-pt-2 tw-flex  tw-gap-2">
                  {/* ปุ่มแก้ไข */}
                  <div className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-bg-blue-500 tw-rounded-full tw-shadow-sm hover:tw-bg-blue-600 hover:tw-shadow-md hover:tw-scale-110 tw-transition-all tw-duration-300">
                    <MdEditSquare
                      onClick={() => {
                        oldDataCommentId(data.id);
                        setOpenEditCommentModel(true);
                      }}
                      className="tw-text-xl tw-text-white tw-transition-all tw-duration-300 hover:tw-cursor-pointer"
                    />
                  </div>
                  {/* ปุ่มลบ */}
                  <div className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-bg-red-500 tw-rounded-full tw-shadow-sm hover:tw-bg-red-600 hover:tw-shadow-md hover:tw-scale-110 tw-transition-all tw-duration-300">
                    <TiDelete
                      onClick={() => {
                        handleDeleteComment(data.id);
                        setOpenDeleteCommentModel(true);
                      }}
                      className="tw-text-3xl tw-text-white tw-transition-all tw-duration-300 hover:tw-cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* starpoint */}
            <div className="tw-flex tw-items-center tw-space-x-1 tw-pl-6">
              {Array.from({ length: data.score }).map((_, index) => (
                <AiFillStar
                  key={index}
                  className="tw-text-2xl tw-text-yellow-400"
                />
              ))}
            </div>
            {/* datepost */}
            <div className="tw-py-2 tw-pl-6">
              {new Date(data.createdAt).toLocaleDateString() || "ไม่ระบุ"}
            </div>
            {/* sublogo  */}
            <div className="tw-flex tw-w-2/6 tw-items-center tw-px-4 tw-py-2 tw-rounded-full tw-bg-slate-100">
              <BsFillCheckCircleFill className="tw-text-green-500 tw-text-xl tw-mr-2" />
              <span className="tw-text-green-500 tw-font-medium">
                Quality Review
              </span>
            </div>
            {/* comment */}
            <div className="tw-p-4 tw-w-full">
              <div className="tw-w-full tw-bg-white tw-rounded-lg tw-p-4 tw-shadow-md tw-flex tw-flex-col tw-gap-2 tw-overflow-hidden tw-break-words tw-max-h-40 tw-overflow-y-auto">
                <span className="tw-font-bold">รายละเอียด:</span>
                <p>{data.comment}</p>
              </div>
            </div>
            {/* images */}
            <div
              className={`tw-mt-4 tw-pl-6 ${
                !data.image || data.image.length === 0 ? "tw-hidden" : ""
              }`}
            >
              <div className="tw-text-xl">รูปภาพเพิ่มเติม:</div>
              <div className="tw-flex tw-gap-4 tw-overflow-x-auto tw-py-2">
                {data.image &&
                  data.image
                    .split(",")
                    .map((image, index) => (
                      <img
                        onClick={() => openModalWithIndex(data.image, index)}
                        key={index}
                        src={image.trim()}
                        alt={`Comment Image ${index + 1}`}
                        className="tw-w-32 tw-h-32 tw-object-cover tw-rounded-lg hover:tw-scale-105 hover:tw-cursor-pointer tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300"
                      />
                    ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModelForOpenImages
        isOpen={isModalOpen}
        onClose={closeModal}
        images={selectedImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Model
        title="ยืนยันลบคอมเม้น"
        open={openDeleteCommentModel}
        onClose={() => setOpenDeleteCommentModel(false)}
      >
        <ModelForDeleteInShopId
          shopId={shopId}
          commentId={selectedCommentId}
          onClose={() => setOpenDeleteCommentModel(false)}
          handleDeleteCommentId={handleDeleteCommentId}
        />
      </Model>
      <Model
        title="แก้ไขคอมเม้น"
        open={openEditCommentModel}
        onClose={() => setOpenEditCommentModel(false)}
      >
        <ModelForEditsCommentInIdShop
          onClose={() => setOpenEditCommentModel(false)}
          editCommentInShopId={editCommentInShopId}
          oldDataComment={oldDataComment}
        />
      </Model>
    </>
  );
}
