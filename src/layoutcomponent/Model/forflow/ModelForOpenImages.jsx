import { IoClose } from "react-icons/io5";

export default function ModelForOpenImages({
  isOpen,
  onClose,
  images = [],
  currentIndex,
  setCurrentIndex,
}) {
  if (!isOpen) return null;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black/85 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-[95%] md:tw-w-[85%] lg:tw-w-[75%] lg:tw-h-[80%] tw-relative">
        <button
          className="tw-absolute tw-top-2 tw-right-2 tw-text-gray-500 tw-text-3xl hover:tw-text-red-500"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <img
          src={images[currentIndex]?.trim()}
          alt={`Image ${currentIndex + 1}`}
          className="tw-w-full tw-h-full tw-object-contain"
        />
        <button
          className="tw-absolute tw-top-1/2 tw-left-4 tw-text-white tw-text-3xl tw-bg-black/50 tw-rounded-full tw-p-2 hover:tw-bg-black"
          onClick={goToPrevious}
        >
          &#8249;
        </button>
        <button
          className="tw-absolute tw-top-1/2 tw-right-4 tw-text-white tw-text-3xl tw-bg-black/50 tw-rounded-full tw-p-2 hover:tw-bg-black"
          onClick={goToNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
