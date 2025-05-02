import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import blank from "../../../assets/foruserreport/blank.png";
import { useState } from "react";
import formatTimeAgo from "../../../logic/utils/time-ago";
import { useAuth } from "../../../logic/hook/user-auth";
import axios from "../../../logic/config/axios";
import Model from "../../Model";
import ModelForComment from "../../../layoutcomponent/Model/forflow/ModelForComment";
import ModelForDeleteCommentUserReportId from "../../../layoutcomponent/Model/forflow/ModelForDeleteCommentUserReportId";
import ModelForEditDataComment from "../../../layoutcomponent/Model/forflow/ModelForEditDataComment";
import ModelForOpenImages from "../../../layoutcomponent/Model/forflow/ModelForOpenImages";
import { useTranslation } from "react-i18next";
export default function Layout3CommentInTitle({
  reportId,
  comment,
  handleDeleteCommentId,
  fetchComments,
}) {
  const { t } = useTranslation();
  const { authUser } = useAuth();
  const [openDeleteCommentModel, setOpenDeleteCommentModel] = useState(false);
  const [openEditCommentModel, setOpenEditCommentModel] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [oldDataComment, setOldDataComment] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const oldDataCommentId = async (id) => {
    setSelectedCommentId(id);
    try {
      const response = await axios.get(
        `/commentidreport/datacommentinreportid/${reportId}/${id}`
      );
      setOldDataComment(response.data);
      setOpenEditCommentModel(true);
    } catch (error) {
      console.error("Error fetching old comment data:", error);
    }
  };

  const editCommentInUserReportId = async (formData) => {
    try {
      if (!reportId || !selectedCommentId) {
        throw new Error("Report ID หรือ Comment ID ไม่ถูกต้อง");
      }

      await axios.patch(
        `/commentidreport/editscommentinreportid/${reportId}/${selectedCommentId}`,
        formData
      );

      await fetchComments();
    } catch (error) {
      console.error("Error editing commentInUserReportId:", error.message);
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
      <div className="tw-flex tw-flex-col tw-bg-gray-100 tw-py-8 tw-items-center">
        {comment.length > 0 ? (
          comment.map((item, index) => (
            <div
              key={index}
              className={`tw-w-full tw-max-w-3xl tw-rounded-2xl tw-shadow-xl tw-border tw-border-gray-300 tw-mb-6 ${
                item.user.status?.trim() !== "ประชาชน"
                  ? "tw-bg-blue-50"
                  : "tw-bg-white"
              }`}
            >
              {/* Text Comment */}
              <div className="tw-py-6 tw-px-8">
                {item.user.id === authUser.id ? (
                  <div className="tw-flex tw-justify-end tw-text-xl tw-cursor-pointer">
                    <MdOutlineDeleteForever
                      onClick={() => {
                        handleDeleteComment(item.id);
                        setOpenDeleteCommentModel(true);
                      }}
                      className="hover:tw-text-blue-700"
                    />
                    <AiOutlineEdit
                      onClick={() => oldDataCommentId(item.id)}
                      className="hover:tw-text-blue-700"
                    />
                  </div>
                ) : (
                  ""
                )}

                <h2 className="tw-text-xl tw-font-thin tw-text-gray-900 tw-break-words tw-overflow-hidden tw-text-ellipsis">
                  {item.text}
                </h2>
              </div>
              {/* Text Image */}
              <div className="tw-grid tw-grid-cols-3 tw-p-2">
                {item.image &&
                  item.image.split(",").map((url, imgIndex) => {
                    const trimmedUrl = url.trim();
                    return (
                      <div
                        className=""
                        key={imgIndex}
                        onClick={() => openModalWithIndex(item.image, imgIndex)}
                      >
                        <img
                          loading="lazy"
                          src={trimmedUrl}
                          alt={`Comment Image ${imgIndex}`}
                          className="tw-h-full tw-cursor-pointer"
                          onError={(e) => {
                            e.target.src = "/path/to/fallback-image.png";
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
              {/* Video Post */}
              <br />
              {item.vdo && (
                <div className="tw-w-full tw-px-6 tw-pb-6">
                  <div className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300">
                    <video
                      loading="lazy"
                      src={item.vdo}
                      controls
                      className="tw-w-full tw-rounded-lg"
                    ></video>
                  </div>
                </div>
              )}
              <hr className="tw-border-gray-300 tw-mx-6" />
              {/* Status Post */}
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-6 tw-gap-6 tw-bg-white tw-rounded-lg tw-shadow-md">
                {/* Left Section */}
                {item.user.status?.trim() === "ประชาชน" ? (
                  <div className="tw-w-full md:tw-w-4/12 tw-bg-gray-50 tw-rounded-lg tw-shadow-inner tw-p-6">
                    <div className="tw-flex tw-flex-col tw-items-start tw-justify-center">
                      <div className="tw-rounded-full tw-overflow-hidden tw-shadow-sm">
                        <img
                          alt="profile"
                          src={item.user?.profile || blank}
                          className="tw-w-16 tw-h-16 sm:tw-w-20 sm:tw-h-20 md:tw-w-24 md:tw-h-24 lg:tw-w-24 lg:tw-h-24 xl:tw-w-30 xl:tw-h-30 tw-object-cover hover:tw-cursor-pointer"
                        />
                      </div>
                      <h6 className="tw-text-gray-700 tw-text-base tw-mb-3">
                        {item.user?.firstName}
                        {item.user?.lastName || "ไม่ระบุ"}
                      </h6>
                      <p className="tw-text-sm tw-text-gray-500">
                        โพสเมื่อ:
                        {new Date(item.createdAt).toLocaleDateString("th-TH")}
                      </p>
                      <p className="tw-text-sm tw-text-gray-500">
                        {formatTimeAgo(item.createdAt)}
                      </p>
                    </div>

                    <div className="tw-mt-6 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-300 tw-to-blue-500 tw-rounded-full"></div>
                  </div>
                ) : (
                  <div className="tw-w-full md:tw-w-4/12 tw-bg-gray-50 tw-rounded-lg tw-shadow-inner tw-p-6">
                    <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-4">
                      <h1 className="tw-text-2xl">{t("status")}</h1>
                      <h3>{item.user.status}</h3>
                      <p className="tw-text-sm tw-text-gray-500">
                        {t("posttime")}:
                        {new Date(item.createdAt).toLocaleDateString("th-TH")}
                      </p>
                      <p className="tw-text-sm tw-text-gray-500">
                        {formatTimeAgo(item.createdAt)}
                      </p>
                    </div>
                    <div className="tw-mt-6 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-300 tw-to-blue-500 tw-rounded-full"></div>
                  </div>
                )}

                {/* Right Section */}
                <div className="tw-flex-1 tw-bg-blue-50 tw-p-6 tw-rounded-lg tw-shadow-lg">
                  <h6 className="tw-text-lg tw-font-extrabold tw-text-blue-600 tw-mb-4 tw-bg-blue-100 tw-p-4 tw-rounded-lg tw-shadow-inner">
                    {t("status")}
                  </h6>
                  <div className="tw-flex tw-items-center tw-gap-3 tw-mb-2">
                    <FaCircle
                      className={`tw-text-xl tw-shadow-lg tw-transition-transform tw-duration-300 hover:tw-scale-125 ${
                        item.postuserreport.status === "แจ้ง"
                          ? "tw-text-red-500"
                          : item.postuserreport.status === "รับแจ้งแล้ว"
                          ? "tw-text-orange-500"
                          : item.postuserreport.status === "กำลังดำเนินการ"
                          ? "tw-text-yellow-500"
                          : item.postuserreport.status === "จัดการเสร็จสิ้น"
                          ? "tw-text-green-500"
                          : item.postuserreport.status === "ยกเลิก"
                          ? "tw-text-gray-500"
                          : "tw-text-gray-400"
                      }`}
                    />
                    <p className="tw-text-gray-700 tw-font-medium">
                      {item.postuserreport.status}
                    </p>
                  </div>
                  <div className="tw-mt-4 tw-bg-white tw-p-4 tw-rounded-md tw-shadow-sm tw-border tw-border-blue-200">
                    <p className="tw-text-sm tw-text-gray-600">
                      {t("waitingForTeamToFixIssue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="tw-text-gray-500">ไม่มีความคิดเห็น</p>
        )}
      </div>

      <Model
        title={t("deleteComment")}
        open={openDeleteCommentModel}
        onClose={() => setOpenDeleteCommentModel(false)}
      >
        <ModelForDeleteCommentUserReportId
          reportId={reportId}
          commentId={selectedCommentId}
          handleDeleteCommentId={handleDeleteCommentId}
          onClose={() => setOpenDeleteCommentModel(false)}
        />
      </Model>
      <ModelForComment
        title={t("editCommentUserreport")}
        open={openEditCommentModel}
        onClose={() => {
          if (
            oldDataComment?.text ||
            oldDataComment?.image ||
            oldDataComment?.vdo
          ) {
            setOpenEditCommentModel(false);
          }
        }}
      >
        <ModelForEditDataComment
          editCommentInUserReportId={editCommentInUserReportId}
          oldDataComment={oldDataComment}
          onClose={() => setOpenEditCommentModel(false)}
        />
      </ModelForComment>
      <ModelForOpenImages
        isOpen={isModalOpen}
        onClose={closeModal}
        images={selectedImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
