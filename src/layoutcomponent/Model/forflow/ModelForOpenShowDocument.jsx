import { IoClose } from "react-icons/io5";

export default function ModelForOpenShowDocument({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black/85 tw-flex tw-items-center tw-justify-center tw-px-[4%] sm:tw-px-[8%] md:tw-px-[16%] lg:tw-px-[20%] xl:tw-px-[32%] tw-overflow-y-auto">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-relative tw-w-[90%] sm:tw-w-[90%] md:tw-w-[88%] md:tw-h-[90%] lg:tw-w-[100%] lg:tw-h-[90%] xl:tw-w-[90%]  xl:tw-h-[90%] tw-p-2 sm:tw-pt-8 md:tw-px-2 lg:tw-py-2 xl:tw-pt-8">
          {/* ปุ่มปิด Modal */}
          <button
            className="tw-absolute tw-top-1 tw-right-3 tw-text-gray-500 tw-text-3xl hover:tw-text-red-500"
            onClick={onClose}
          >
            <IoClose />
          </button>
          {/* รูปภาพเอกสาร */}
          <img
            loading="lazy"
            src={image}
            alt="fullscreen"
            className="tw-w-full tw-h-full tw-object-contain"
          />
        </div>
      </div>
    </>
  );
}
