import { TbGps } from "react-icons/tb";
import blank from "../../../assets/foruserreport/blank.png";
import { useState } from "react";
import formatTimeAgo from "../../../logic/utils/time-ago";
import ModelForOpenImages from "../../Model/forflow/ModelForOpenImages";
import Model from "../../../layoutcomponent/Model";
import ModelForUpdateStatusShopInSizeList from "../../../layoutcomponent/Model/forflow/ModelForUpdateStatusShopInSizeList";

export default function Layout2DataShop({
  datashop,
  shopId,
  handleUpdateStatus,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState("");
  const [openModelChangeStatus, setOpenModelChangeStatus] = useState(false);

  const openModalWithIndex = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(0);
  };

  const toggleModal = (image) => {
    setModalImage(image);
    setModalOpen(!isModalOpen);
  };

  const openForChangeStatus = () => {
    setOpenModelChangeStatus(true);
  };

  const image = datashop.image ? datashop.image.split(",") : [];
  const firstImage = image[0];

  return (
    <>
      <div className="tw-text-center tw-w-full hover:tw-text-white tw-bg-blue-500 tw-text-white tw-text-lg sm:tw-text-xl lg:tw-text-2xl tw-font-thin tw-py-4 tw-px-6 tw-shadow-lg tw-overflow-hidden tw-whitespace-normal tw-text-ellipsis tw-break-words hover:tw-cursor-pointer">
        {datashop.name}
      </div>
      <div className="tw-flex tw-flex-wrap tw-bg-slate-100 tw-p-4 tw-w-full">
        {/* Column 1/6: รูปหลัก */}
        <div className="tw-w-full sm:tw-w-1/6 tw-p-2">
          <div className="tw-relative tw-w-full tw-aspect-square tw-overflow-hidden tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300">
            <img
              onClick={() => toggleModal(firstImage)}
              src={datashop.image.split(",")[0]?.trim()}
              alt="Main Image"
              loading="lazy"
              className="tw-w-full tw-h-full tw-object-cover hover:tw-scale-105 hover:tw-cursor-pointer tw-rounded-xl"
            />
          </div>
        </div>

        {/* Column 1/6: Profile & Details */}
        <div className="tw-w-full sm:tw-w-1/6 tw-flex tw-flex-col  tw-p-2">
          {/* Profile */}
          <div className="tw-bg-white tw-flex tw-items-center sm:tw-flex-col md:tw-flex-col tw-gap-4 tw-p-4 tw-rounded-lgtw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300">
            <img
              src={datashop.profile || blank}
              alt="profile"
              className="tw-rounded-full tw-h-16 tw-w-16 tw-border-4 tw-border-gray-300 hover:tw-cursor-pointer"
            />
            <div className="tw-flex tw-flex-col tw-text-center">
              <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800">
                {datashop.firstName}
              </h3>
              <h3 className="tw-text-sm tw-text-gray-500">
                {datashop.lastName}
              </h3>
            </div>
          </div>

          {/* Combined Information */}
          <div className="tw-bg-blue-200 tw-p-4 tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300">
            <div className="tw-text-sm tw-font-medium">
              ประเภท: {datashop.category}
            </div>
            <div className="tw-text-sm tw-mt-2">
              วันที่โพส: {new Date(datashop.createdAt).toLocaleDateString()}
            </div>
            <div className="tw-text-sm tw-mt-2">
              {formatTimeAgo(datashop.createdAt)}
            </div>
          </div>
          <div
            onClick={openForChangeStatus}
            className={`tw-text-white tw-w-full hover:tw-cursor-pointer tw-pl-2 tw-shadow-md tw-flex tw-flex-col tw-justify-between tw-px-2 tw-gap-2 tw-overflow-hidden tw-h-auto hover:tw-opacity-75 ${
              datashop.status === "ส่งเรื่องแล้ว"
                ? "tw-bg-[#ADD8E6] hover:tw-bg-[#92c6e3] hover:tw-scale-105 hover:tw-shadow-lg"
                : datashop.status === "กำลังเช็คเอกสาร"
                ? "tw-bg-[rgb(100,149,237)] hover:tw-bg-[rgb(80,119,219)] hover:tw-scale-105 hover:tw-shadow-lg"
                : datashop.status === "ขอเอกสารเพิ่ม"
                ? "tw-bg-[rgb(65,105,225)] hover:tw-bg-[rgb(40,80,200)] hover:tw-scale-105 hover:tw-shadow-lg"
                : datashop.status === "สำเร็จ"
                ? "tw-bg-cyan-950 hover:tw-bg-cyan-700 hover:tw-scale-105 hover:tw-shadow-lg"
                : datashop.status === "ไม่ผ่าน"
                ? "tw-bg-[rgb(0,50,130)] hover:tw-bg-[rgb(0,30,110)] hover:tw-scale-105 hover:tw-shadow-lg"
                : "tw-bg-cyan-100 hover:tw-bg-cyan-200 hover:tw-scale-105 hover:tw-shadow-lg"
            } tw-transition-all tw-duration-300`}
          >
            <span className="tw-font-light tw-text-sm sm:tw-text-base md:tw-text-lg">
              สถานะ
            </span>
            <p className="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-whitespace-normal tw-break-words tw-break-all tw-overflow-hidden tw-text-ellipsis">
              {datashop.status}
            </p>
          </div>
        </div>

        {/* Column 4/6: Content */}
        <div className="tw-w-full sm:tw-w-4/6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6">
          <div className="tw-w-full tw-bg-slate-200 tw-rounded-lg tw-p-4 tw-shadow-md tw-flex tw-flex-col tw-gap-2">
            <div className="tw-cursor-pointer">
              <div className="tw-flex tw-gap-4">
                <div className="tw-pt-2">แผนที่</div>
                <div className="tw-inline-block tw-rounded-full tw-p-2 tw-transition-all tw-duration-300 tw-transform tw-bg-blue-500 hover:tw-scale-150">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${datashop.latitude},${datashop.longtitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbGps className="tw-text-2xl tw-transition-colors tw-duration-300 tw-text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="tw-whitespace-normal tw-break-words">
                ที่อยู่ : {datashop.address}
              </p>
            </div>
            <div className="tw-w-full tw-bg-slate-50 tw-rounded-lg tw-p-4 tw-shadow-md tw-flex tw-flex-col tw-gap-2 tw-overflow-hidden tw-break-words tw-max-h-40 tw-overflow-y-auto">
              <span className="tw-font-bold">รายละเอียด:</span>
              <p>{datashop.details}</p>
            </div>
          </div>
          <div className="tw-mt-4">
            <div className="tw-text-sm">รูปภาพเพิ่มเติม:</div>
            <div className="tw-flex tw-gap-4 tw-overflow-x-auto tw-py-2">
              {datashop.image &&
                datashop.image
                  .split(",")
                  .map((image, index) => (
                    <img
                      onClick={() => openModalWithIndex(index)}
                      key={index}
                      src={image.trim()}
                      alt={`Additional Image ${index + 1}`}
                      className="tw-w-40 tw-h-40 tw-object-cover tw-rounded-lg hover:tw-scale-105 hover:tw-cursor-pointer tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300"
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>

      <ModelForOpenImages
        isOpen={isModalOpen}
        onClose={closeModal}
        images={datashop?.image?.split(",") || []}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {openModelChangeStatus && (
        <Model
          title="อัพเดทสถานะร้านค้า"
          open={openModelChangeStatus}
          onClose={() => setOpenModelChangeStatus(false)}
        >
          <ModelForUpdateStatusShopInSizeList
            id={shopId}
            onClose={() => setOpenModelChangeStatus(false)}
            handleUpdateStatus={handleUpdateStatus}
          />
        </Model>
      )}
    </>
  );
}
