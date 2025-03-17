import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { BsPinMap } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import blank from "../../assets/foruserreport/blank.png";
import vision1 from "../../assets/forvision/vision1.png";
import Model from "../../layoutcomponent/Model";
import ModelForUpdateStatusUserReport from "../../layoutcomponent/Model/forflow/ModelForUpdateStatusUserReport";
import formatTimeAgo from "../../logic/utils/time-ago";
import ModalForOpenOneImage from "../../layoutcomponent/Model/forflow/ModelForOpenOneImage";

export default function TitleItem({ dataUserReport, setDataUserReport }) {
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

        return (
          <div
            key={report.id}
            className="tw-flex tw-flex-col hover:tw-cursor-pointer md:tw-flex-row tw-rounded-lg tw-shadow-lg tw-max-w-4xl tw-w-full tw-transform hover:tw-scale-105 tw-transition tw-duration-300 tw-ease-in-out tw-border tw-border-t-4"
          >
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
            <div className="tw-p-6  md:tw-w-2/4 lg:tw-w-2/4 xl:tw-w-2/4 tw-flex tw-flex-col">
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

            <div className="tw-mt-4 tw-flex-">
              <h6
                onClick={() => sendId(report.id)}
                className="tw-text-lg tw-font-semibold tw-text-blue-600 tw-mb-2 tw-bg-blue-100 tw-p-2 tw-rounded-lg tw-shadow-sm"
              >
                สถานะ
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
                      : report.status === "จัดการเร็จสิ้น"
                      ? "tw-text-green-500"
                      : report.status === "ยกเลิก"
                      ? "tw-text-gray-500"
                      : "tw-text-gray-400"
                  }`}
                />
                <p className="tw-text-gray-700 tw-text-base">{report.status}</p>
              </div>
              <div className="tw-flex tw-items-center tw-space-x-3">
                <BsPinMap className="tw-text-blue-500 tw-text-lg" />
                <a
                  href={
                    report.map && report.map.startsWith("http://")
                      ? report.map
                      : report.map
                      ? `https://${report.map}`
                      : "#"
                  }
                  target={report.map ? "_blank" : "_self"} // เปิด tab ใหม่เฉพาะกรณีมี map
                  rel="noopener noreferrer"
                  className="tw-text-gray-700 tw-text-base"
                >
                  พิกัด
                </a>
              </div>
              {report._count.commentinpostuserreport > 0 && (
                <div className="tw-flex tw-items-center tw-space-x-3">
                  <BiMessage className="tw-text-lg" />
                  <p className="tw-text-gray-700 tw-text-base">
                    {report._count.commentinpostuserreport}
                  </p>
                </div>
              )}

              <p className="tw-text-gray-700 tw-text-base">
                {formatTimeAgo(report.createdAt)}
              </p>
            </div>
          </div>
        );
      })}

      {/* Fullscreen Modal */}
      <ModalForOpenOneImage
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        image={modalImage}
      />
      {openModelChangeStatus && (
        <Model
          title="อัพเดทสถานะประชาชนร้องเรียน"
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
