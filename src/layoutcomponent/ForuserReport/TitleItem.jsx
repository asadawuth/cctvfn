import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { BsPinMap, BsBell } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import blank from "../../assets/foruserreport/blank.png";
import vision1 from "../../assets/forvision/vision1.png";
import Model from "../../layoutcomponent/Model";
import ModelForUpdateStatusUserReport from "../../layoutcomponent/Model/forflow/ModelForUpdateStatusUserReport";
import formatTimeAgo from "../../logic/utils/time-ago";
import ModalForOpenOneImage from "../../layoutcomponent/Model/forflow/ModelForOpenOneImage";
import { useTranslation } from "react-i18next";
import { useSocket } from "../../logic/context/SocketContext";

export default function TitleItem({ dataUserReport, setDataUserReport }) {
  const { newCommentCounts } = useSocket();
  const { t } = useTranslation();
  const [modalImage, setModalImage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [openModelChangeStatus, setOpenModelChangeStatus] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const sendId = (id) => {
    setSelectId(id);
    setOpenModelChangeStatus(true);
  };

  const toggleModal = (image) => {
    setModalImage(image || vision1);
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      {dataUserReport.map((report) => {
        const images = report.image ? report.image.split(",") : [];
        const firstImage = images[0];
        const commentBadge = newCommentCounts?.[report.id] || 0;

        return (
          <div
            key={report.id}
            className="tw-flex tw-flex-col hover:tw-cursor-pointer md:tw-flex-row tw-rounded-lg tw-shadow-lg tw-max-w-4xl tw-w-full tw-transform hover:tw-scale-105 tw-transition tw-duration-300 tw-ease-in-out tw-border tw-border-t-4"
          >
            {/* Image */}
            <div
              className="tw-w-full md:tw-w-1/3 tw-h-[250px] md:tw-h-[250px] tw-overflow-hidden"
              onClick={() => toggleModal(firstImage)}
            >
              <img
                loading="lazy"
                alt="report"
                src={firstImage || vision1}
                className="tw-w-full tw-h-full tw-object-fill tw-rounded-t-lg md:tw-rounded-l-lg md:tw-rounded-none"
              />
            </div>

            {/* Text/Info */}
            <div className="tw-p-6 md:tw-w-2/4 lg:tw-w-2/4 xl:tw-w-2/4 tw-flex tw-flex-col">
              <div className="tw-flex tw-gap-4 tw-pb-2">
                <div>
                  <img
                    alt="blank"
                    src={report.user.profile || blank}
                    className="tw-w-12 tw-h-12 tw-object-cover tw-rounded-full"
                  />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-flex tw-gap-4">
                    <h6>{report.user.firstName}</h6>
                    <h6>{report.user.lastName}</h6>
                  </div>
                  <p className="tw-text-gray-500 tw-text-sm">
                    {report.type}: {new Date(report.time).toLocaleDateString()}{" "}
                    {formatTimeAgo(report.time)}
                  </p>
                </div>
              </div>

              <Link to={`/userReport/alldatatitle/${report.id}`}>
                <h3 className="tw-text-lg tw-font-bold tw-mb-4 tw-text-blue-600 tw-bg-blue-100 tw-p-2 tw-rounded-lg tw-shadow-sm tw-whitespace-normal tw-w-full tw-break-words">
                  {report.texttitle}
                </h3>
              </Link>
            </div>

            {/* Status + Actions */}
            <div className="tw-flex- tw-mt-4">
              <h6
                onClick={() => sendId(report.id)}
                className="tw-text-lg tw-font-semibold tw-text-blue-600 tw-mb-2 tw-bg-blue-100 tw-p-2 tw-rounded-lg tw-shadow-sm"
              >
                {t("DataInfileCreatedIdEmployeeForm.status.status")}
              </h6>

              <div className="tw-flex tw-items-center tw-space-x-3">
                <FaCircle
                  className={`tw-text-lg ${
                    report.status === "แจ้ง"
                      ? "tw-text-red-500"
                      : report.status === "รับแจ้งแล้ว"
                      ? "tw-text-orange-500"
                      : report.status === "กำลังดำเนินการ"
                      ? "tw-text-yellow-500"
                      : report.status === "จัดการเสร็จสิ้น"
                      ? "tw-text-green-500"
                      : report.status === "ยกเลิก"
                      ? "tw-text-gray-500"
                      : "tw-text-gray-400"
                  }`}
                />
                <p className="tw-text-gray-700 tw-text-base">{report.status}</p>
              </div>

              {/* Map */}
              <div className="tw-flex tw-items-center tw-space-x-3">
                {report.map && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${report.map}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsPinMap className="tw-text-blue-500 tw-text-lg" />
                  </a>
                )}
              </div>

              {/* Comments */}
              {report._count.commentinpostuserreport > 0 && (
                <div className="tw-flex tw-items-center tw-space-x-3">
                  <BiMessage className="tw-text-lg" />
                  <p className="tw-text-gray-700 tw-text-base">
                    {report._count.commentinpostuserreport}
                  </p>
                </div>
              )}

              {/* Time */}
              <p className="tw-text-gray-700 tw-text-base">
                {formatTimeAgo(report.createdAt)}
              </p>

              {/* Bell + Badge */}
              <div className="tw-relative tw-inline-block tw-mt-2">
                <BsBell className="tw-text-lg tw-text-blue-600" />
                {commentBadge > 0 && (
                  <div className="tw-absolute tw-top-0 tw-right-0 tw-w-5 tw-h-5 tw-bg-red-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-xs tw-text-white tw-translate-x-1/2 -tw-translate-y-1/2">
                    {commentBadge}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Fullscreen Image Modal */}
      <ModalForOpenOneImage
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        image={modalImage}
      />

      {/* Status Change Modal */}
      {openModelChangeStatus && (
        <Model
          title={t("textHeader")}
          open={openModelChangeStatus}
          onClose={() => setOpenModelChangeStatus(false)}
        >
          <ModelForUpdateStatusUserReport
            id={selectId}
            onClose={() => setOpenModelChangeStatus(false)}
            setDataUserReport={setDataUserReport}
          />
        </Model>
      )}
    </>
  );
}
