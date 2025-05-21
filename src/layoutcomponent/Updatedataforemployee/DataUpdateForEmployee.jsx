import { useTranslation } from "react-i18next";
import { useState } from "react";
import Model from "../../layoutcomponent/Model";
import ModelForDataUpdateForEmployee from "../Model/forflow/ModelForDataUpdateForEmployee";

export default function DataUpdateForEmployee({ data, deleteImage }) {
  const [clickFordelete, setClickForDelete] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [imageToDelete, setImageToDelete] = useState("");
  const { t } = useTranslation();
  return (
    <>
      <div className="tw-bg-gray-100 tw-flex tw-justify-center">
        {t("DataUpdateForEmployeeText1")}
      </div>
      <div className="sm:tw-flex sm:tw-flex-col md:tw-flex md:tw-flex-col tw-gap-4 tw-bg-gray-100 tw-p-4">
        {/* Left: TextArea */}
        <div className="tw-w-full  tw-border-2 tw-border-black tw-rounded-md tw-bg-white">
          <textarea
            readOnly
            className="tw-w-full tw-h-40 tw-p-3 tw-text-sm tw-rounded-md focus:tw-outline-none"
            value={data.text || ""}
          ></textarea>
        </div>

        {/* Right: Image Gallery */}
        <div className=" tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-2 2xl:tw-grid-cols-5 tw-gap-3 tw-rounded-md">
          {Array.isArray(data.images) &&
            data.images.map((src, idx) => (
              <div key={idx} className="tw-relative tw-w-full">
                {/* ปุ่ม X ลอยมุมขวาบน */}
                {clickFordelete && (
                  <div
                    // onClick={() => console.log("remove image", idx)}
                    onClick={() => {
                      setImageToDelete(src);
                      setOpenModel(true);
                    }}
                    className="tw-absolute -tw-top-2 -tw-right-2
                   tw-bg-red-700 tw-text-white tw-w-5 tw-h-5 tw-rounded-full
                   tw-flex tw-items-center tw-justify-center tw-text-sm
                   tw-cursor-pointer hover:tw-bg-red-600 tw-shadow-md"
                  >
                    ×
                  </div>
                )}

                {/* รูปภาพ */}
                <img
                  src={src}
                  alt={`image-${idx}`}
                  className="tw-w-full tw-aspect-square tw-object-contain tw-rounded-xl hover:tw-scale-105 hover:tw-cursor-pointer"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="tw-bg-gray-100">
        {clickFordelete ? (
          <button
            className="tw-bg-blue-400 hover:tw-bg-blue-600 tw-text-white hover:tw-px-16 tw-px-8"
            onClick={() => {
              setClickForDelete(!clickFordelete);
            }}
          >
            {t("ModelForDataUpdateForEmployeeText3")}
          </button>
        ) : (
          <button
            className="tw-bg-blue-400 hover:tw-bg-blue-600 tw-text-white hover:tw-px-16 tw-px-8"
            onClick={() => {
              setClickForDelete(!clickFordelete);
            }}
          >
            {t("ModelForDataUpdateForEmployeeText4")}
          </button>
        )}
      </div>
      <Model
        title={t("ModelForUpdateRecordDataforemployeeTitle")}
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelForDataUpdateForEmployee
          onConfirmDelete={() => {
            deleteImage(imageToDelete);
            setOpenModel(false);
          }}
          onClose={() => setOpenModel(false)}
        />
      </Model>
    </>
  );
}
