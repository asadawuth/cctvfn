import { useState } from "react";
import { BsPinMap } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import blank from "../../../assets/foruserreport/blank.png";
import Model from "../../../layoutcomponent/Model";
import ModelForUpdateStatusInSideList from "../../../layoutcomponent/Model/forflow/ModelForUpdateStatusInSideList";

import formatTimeAgo from "../../../logic/utils/time-ago";
import ModelForOpenImages from "../../Model/forflow/ModelForOpenImages";
export default function Layout2AllTitle({
  report,
  handleEditStatusUserReportId,
  reportId,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModelChangeStatus, setOpenModelChangeStatus] = useState(false);

  const sendId = () => {
    setOpenModelChangeStatus(true);
  };

  const openModalWithIndex = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(0);
  };

  return (
    <>
      <div className="tw-flex tw-flex-col tw-bg-gray-100 tw-py-6 tw-items-center">
        {/* Card */}
        <div className="tw-w-full tw-max-w-3xl tw-bg-white tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-300">
          {/* Title Text */}

          <div className={report?.texttitle ? "" : "tw-hidden"}>
            <h2 className="tw-pl-4 tw-pr-4 tw-text-2xl tw-break-words tw-overflow-hidden tw-text-ellipsis">
              {report?.texttitle}
            </h2>
          </div>

          {/* Image Story */}
          <div
            className={
              report?.image
                ? "tw-grid tw-grid-rows tw-grid-cols-3 tw-w-full tw-gap-0.5 sm:tw-gap-1"
                : "hidden"
            }
          >
            {report?.image?.split(",").map((image, index) => (
              <div
                loading="lazy"
                key={index}
                className={`tw-px-1 tw-py-1 ${
                  index === 0
                    ? "tw-col-span-3 md:tw-col-span-2 md:tw-row-span-2"
                    : "tw-col-span-3 md:tw-col-span-1 md:tw-row-span-1"
                } hover:tw-cursor-pointer`}
                onClick={() => openModalWithIndex(index)}
              >
                <img
                  src={image.trim()}
                  alt={`Image ${index + 1}`}
                  className="tw-w-full tw-h-auto md:tw-h-full lg:tw-h-full xl:tw-h-full tw-object-cover tw-rounded-md"
                />
              </div>
            ))}
          </div>
          <div className={report?.textstory ? "tw-pl-4 tw-pt-2" : "tw-hidden"}>
            {report?.textstory}
          </div>
          {/* VDO Section */}
          <div
            className={
              report?.vdo ? "tw-w-full tw-rounded-2xl tw-p-6" : "tw-hidden"
            }
          >
            {report?.vdo && (
              <video
                loading="lazy"
                src={report.vdo}
                autoPlay
                controls
                className="tw-w-full tw-rounded-lg tw-shadow-sm"
              />
            )}
          </div>

          <hr />

          {/* Profile Section */}
          <div className="tw-flex tw-flex-col md:tw-flex-row">
            <div
              className={`tw-flex tw-items-center tw-justify-center md:tw-justify-start tw-w-full md:tw-w-2/12 tw-p-2`}
            >
              <div className="tw-rounded-full tw-overflow-hidden tw-shadow-sm">
                <img
                  alt="profile"
                  src={report.profile || blank}
                  className="tw-w-16 tw-h-16 sm:tw-w-20 sm:tw-h-20 md:tw-w-24 md:tw-h-24 lg:tw-w-24 lg:tw-h-24 xl:tw-w-30 xl:tw-h-30 tw-object-cover hover:tw-cursor-pointer"
                />
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-justify-center tw-px-4 tw-flex-1">
              <h6 className="tw-font-medium tw-text-gray-800">
                {report.firstName}
              </h6>
              <h6 className="tw-font-medium tw-text-gray-800">
                {report.lastName}
              </h6>
              <p className="tw-text-sm tw-text-gray-500">
                {new Date(report.createdAt).toLocaleString("th-TH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>
              <p className="tw-text-sm tw-text-gray-500">
                {formatTimeAgo(report.createdAt)}
              </p>
            </div>

            {/* Status Section */}
            <div className="tw-p-4 tw-flex-1">
              <h6
                onClick={() => sendId()}
                className="tw-text-lg tw-font-semibold tw-text-blue-600 tw-mb-4 tw-bg-blue-100 tw-p-2 tw-rounded-lg tw-shadow tw-cursor-pointer"
              >
                สถานะ
              </h6>
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-2">
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
                <p className="tw-text-gray-700">{report.status}</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
                <BsPinMap className="tw-text-red-500 tw-text-lg" />
                {report.map && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${report.map}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    พิกัด
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModelForOpenImages
        isOpen={isModalOpen}
        onClose={closeModal}
        images={report?.image?.split(",") || []}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {openModelChangeStatus && (
        <Model
          title="อัพเดทสถานะประชาชนร้องเรียน"
          open={openModelChangeStatus}
          onClose={() => setOpenModelChangeStatus(false)}
        >
          <ModelForUpdateStatusInSideList
            handleEditStatusUserReportId={handleEditStatusUserReportId}
            onClose={() => setOpenModelChangeStatus(false)}
            reportId={reportId}
          />
        </Model>
      )}
    </>
  );
}
