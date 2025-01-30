import { BsFillTelephoneXFill } from "react-icons/bs";
import { useRef } from "react";
import { TbGps } from "react-icons/tb";
import formatTimeAgo from "../../logic/utils/time-ago";
import { useState } from "react";
import Model from "../../layoutconponent/Model";
import ModelForUpdateStatusUserSos from "../Model/forflow/ModelForUpdateStatusUserSos";
export default function Item({ data, setDataSos }) {
  const [openModelChangeStatus, setOpenModelChangeStatus] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const audioRef = useRef(null);

  const sendId = (id) => {
    setSelectId(id);
    setOpenModelChangeStatus(true);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="tw-bg-white   tw-p-4 tw-flex tw-flex-col tw-gap-4 tw-w-full sm:tw-w-2/2 md:tw-w-2/3 lg:tw-w-3/4"
          >
            {/* Header */}
            <div
              onClick={() => sendId(item.id)}
              className={`tw-text-center tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg hover:tw-cursor-pointer tw-transition-all tw-duration-300 tw-ease-in-out ${
                item.status === "แจ้ง"
                  ? "tw-bg-blue-100 tw-text-blue-700 hover:tw-bg-blue-200 hover:tw-text-blue-800 hover:tw-scale-125 hover:tw-shadow-lg"
                  : item.status === "รับแจ้งแล้ว"
                  ? "tw-bg-blue-200 tw-text-blue-800 hover:tw-bg-blue-300 hover:tw-text-blue-900 hover:tw-scale-125 hover:tw-shadow-lg"
                  : item.status === "กำลังดำเนินการ"
                  ? "tw-bg-blue-300 tw-text-blue-900 hover:tw-bg-blue-400 hover:tw-text-white hover:tw-scale-125 hover:tw-shadow-lg"
                  : item.status === "จัดการเสร็จสิ้น"
                  ? "tw-bg-blue-400 tw-text-white hover:tw-bg-blue-500 hover:tw-scale-125 hover:tw-shadow-lg"
                  : item.status === "ยกเลิก"
                  ? "tw-bg-blue-500 tw-text-white hover:tw-bg-blue-600 hover:tw-scale-125 hover:tw-shadow-lg"
                  : "tw-bg-gray-800 tw-text-white hover:tw-bg-gray-700 hover:tw-text-gray-300 hover:tw-scale-105 hover:tw-shadow-lg"
              }`}
            >
              {item.status}
            </div>
            <audio
              ref={audioRef}
              controls
              className="tw-w-full tw-rounded-none"
            >
              <source src={item.file} type="audio/wav" />
              <source src={item.file} type="audio/mpeg" />
              <source src={item.file} type="audio/ogg" />
              Your browser does not support the audio tag.
            </audio>

            {/* Content */}
            <div className="tw-text-gray-700 tw-space-y-2">
              <div className="tw-text-sm tw-flex tw-gap-4">
                <div className="">
                  <div className="tw-inline-block tw-rounded-full tw-p-2 tw-transition-all tw-duration-300 tw-transform tw-bg-blue-500 hover:tw-scale-150 hover:tw-cursor-pointer">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longtitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbGps className="tw-text-xl tw-transition-colors tw-duration-300 tw-text-white" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="tw-font-medium">ลำดับที่ {item.num}</div>
                  <div className="tw-font-medium">
                    {item.user.firstName} {item.user.lastName}
                  </div>
                  <a
                    className="tw-text-sm"
                    href={`tel:${item.user.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.user.phone}
                  </a>
                  <div className="tw-text-sm">
                    {" "}
                    {item.type}: {new Date(item.time).toLocaleDateString()}{" "}
                  </div>
                  <div className="tw-text-sm"> {formatTimeAgo(item.time)}</div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        );
      })}
      {openModelChangeStatus && (
        <Model
          title="อัพเดทสถานะประชาชน SoS ฉุกเฉิน"
          open={openModelChangeStatus}
          onClose={() => setOpenModelChangeStatus(false)}
        >
          <ModelForUpdateStatusUserSos
            id={selectId}
            onClose={() => setOpenModelChangeStatus(false)}
            setDataSos={setDataSos}
          />
        </Model>
      )}
    </>
  );
}
