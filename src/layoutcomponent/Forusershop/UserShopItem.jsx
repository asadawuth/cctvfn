import { FaRegCommentAlt } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import imageDefault from "../../assets/forusershop/shopdefault.png";
import formatTimeAgo from "../../logic/utils/time-ago";
import { useState } from "react";
import ModalForOpenOneImage from "../../layoutcomponent/Model/forflow/ModelForOpenOneImage";
import Model from "../Model";
import ModelForDeleteIdShop from "../../layoutcomponent/Model/forflow/ModelForDeleteIdShop";
import ModelForUpdateStatusShop from "../../layoutcomponent/Model/forflow/ModelForUpdateStatusShop";
import { useTranslation } from "react-i18next";

export default function UserShopItem({
  dataUserShop,
  handleUpdateStatus,
  handleDeleteShopId,
}) {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(null);
  const [modalImage, setModalImage] = useState("");
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isUpdateStatusModelOpen, setIsUpdateStatusModelOpen] = useState(false);
  const [selectId, setSelectId] = useState();
  const sendId = (id) => {
    setSelectId(id);
    setIsUpdateStatusModelOpen(true);
  };

  const toggleModal = (image) => {
    setModalImage(image || imageDefault);
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      {dataUserShop.map((shop) => {
        const image = shop.image ? shop.image.split(",") : [];
        const firstImage = image[0] || imageDefault;

        return (
          <div
            key={shop.id}
            className=" tw-rounded-2xl tw-shadow-md hover:tw-shadow-xl tw-transform tw-transition-all hover:tw--translate-y-2 tw-duration-300 tw-overflow-hidden"
          >
            {/* Image */}
            <div className="tw-relative tw-w-full tw-aspect-[4/4] tw-bg-gray-100 tw-rounded-t-2xl">
              <img
                loading="lazy"
                className="tw-w-full tw-h-full  hover:tw-cursor-pointer"
                src={firstImage || imageDefault}
                alt={shop.name || "ร้านค้า"}
                onClick={() => toggleModal(firstImage)}
              />
            </div>
            <div className="tw-p-4">
              {/* Heading */}
              <div className="tw-flex tw-justify-between">
                <div className="hover:tw-cursor-pointer tw-w-[100%]">
                  <h2 className="tw-font-medium tw-text-lg tw-mb-2 tw-tracking-wide hover:tw-tracking-widest">
                    {shop.name || "ชื่อร้าน"}
                  </h2>
                </div>
                <div>
                  {shop.latitude && shop.longtitude && (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${shop.latitude},${shop.longtitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiMapPin className="tw-text-2xl hover:tw-cursor-pointer hover:tw-text-blue-800" />
                    </a>
                  )}
                </div>
              </div>
              {/* Description */}
              <div
                onClick={() => sendId(shop.id)}
                className={`tw-mb-4 tw-p-2 tw-text-white hover:tw-cursor-pointer ${
                  shop.status === "ส่งเรื่องแล้ว"
                    ? "tw-bg-[#ADD8E6]"
                    : shop.status === "กำลังเช็คเอกสาร"
                    ? "tw-bg-[rgb(100,149,237)]"
                    : shop.status === "ขอเอกสารเพิ่ม"
                    ? "tw-bg-[rgb(65,105,225)]"
                    : shop.status === "สำเร็จ"
                    ? "tw-bg-cyan-950"
                    : shop.status === "ไม่ผ่าน"
                    ? "tw-bg-[rgb(0,50,130)]"
                    : ""
                }`}
              >
                <h1
                  className={`tw-text-sm ${
                    shop.status === "ส่งเรื่องแล้ว" ? "tw-text-black" : ""
                  }`}
                >
                  {t("infileUserShopItemCategory")} &nbsp;:&nbsp;
                  <span className="tw-font-medium">
                    {shop.category || "ไม่ระบุ"}
                  </span>
                </h1>
                <h1
                  className={`tw-text-sm ${
                    shop.status === "ส่งเรื่องแล้ว" ? "tw-text-black" : ""
                  }`}
                >
                  {t("infileUserShopItemStatus")} &nbsp;:&nbsp;
                  <span className="tw-font-medium">
                    {shop.status || "ไม่ระบุ"}
                  </span>
                </h1>
              </div>
              {/* Footer */}
              <div className="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-600">
                <span className="tw-font-light">
                  {t("posttime")}&nbsp;:&nbsp;
                  {new Date(shop.createdAt).toLocaleDateString() || "ไม่ระบุ"}
                </span>
                <span className="tw-font-light">
                  {formatTimeAgo(shop.createdAt) || "ไม่ระบุ"}
                </span>
              </div>

              <div className={`tw-flex tw-justify-between`}>
                {/* {location.pathname !== "/pageaction-datashop" && (  )} */}
                <div>
                  <button
                    onClick={() => setIsUpdateStatusModelOpen(true)}
                    className="tw-flex tw-items-center tw-gap-2 tw-text-blue-500 tw-bg-blue-100 hover:tw-bg-blue-200 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-shadow-md tw-transition-all"
                  >
                    <span className="tw-w-4 tw-h-4 tw-bg-blue-500 tw-rounded-full"></span>
                    {t("infileUserShopItemUpdateStatus")}
                  </button>
                </div>

                <div className="tw-flex">
                  {shop._count.commentshop === 0 ? "" : shop._count.commentshop}
                  <FaRegCommentAlt className="tw-text-xl tw-text-gray-400 tw-pt-1" />
                </div>
              </div>

              <div className="tw-flex tw-justify-between">
                <a href={`userShop/alldatashop/${shop.id}`}>
                  <button className="tw-flex tw-items-center tw-gap-2 tw-text-green-500 tw-bg-green-100 hover:tw-bg-green-200 tw-px-4 tw-py-2  tw-text-sm tw-font-medium tw-shadow-md tw-transition-all">
                    <span className="tw-w-4 tw-h-4 tw-bg-green-500 tw-rounded-full"></span>
                    {t("infileUserShopItemView")}
                  </button>
                </a>
                {/* {location.pathname !== "/pageaction-datashop" && ( )} */}
                <>
                  <button
                    className="tw-flex tw-items-center tw-gap-2 tw-text-red-500 tw-bg-red-100 hover:tw-bg-red-200 tw-px-4 tw-py-2  tw-text-sm tw-font-medium tw-shadow-md tw-transition-all"
                    onClick={() => {
                      setSelectId(shop.id);
                      setIsDeleteModelOpen(true);
                    }}
                  >
                    <span className="tw-w-4 tw-h-4 tw-bg-red-500 tw-rounded-full"></span>
                    {t("infileUserShopItemDelete")}
                  </button>
                </>
              </div>
            </div>
          </div>
        );
      })}

      {/* ใช้ Modal Component */}
      <ModalForOpenOneImage
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        image={modalImage}
      />
      <Model
        title={t("ModelForDeleteIdShopTitle")}
        open={isDeleteModelOpen}
        onClose={() => setIsDeleteModelOpen(false)}
      >
        <ModelForDeleteIdShop
          id={selectId}
          handleDeleteShopId={handleDeleteShopId}
          onClose={() => setIsDeleteModelOpen(false)}
        />
      </Model>
      <Model
        title={t("ModelForUpdateStatusShopTitle")}
        open={isUpdateStatusModelOpen}
        onClose={() => setIsUpdateStatusModelOpen(false)}
      >
        <ModelForUpdateStatusShop
          id={selectId}
          handleUpdateStatus={handleUpdateStatus}
          onClose={() => setIsUpdateStatusModelOpen(false)}
        />
      </Model>
    </>
  );
}

//[rgb(30,80,190)]
