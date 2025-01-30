import { IoClose } from "react-icons/io5";

export default function ModalForOpenOneImage({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black/85 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-[95%] md:tw-w-[85%] lg:tw-w-[75%] lg:tw-h-[80%]">
        <button
          className="tw-absolute tw-top-2 tw-right-2 tw-text-gray-500 tw-text-3xl hover:tw-text-red-500"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <img
          loading="lazy"
          src={image}
          alt="fullscreen"
          className="tw-w-full tw-h-full tw-object-contain"
        />
      </div>
    </div>
  );
}
