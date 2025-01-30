import { AiOutlineCheck } from "react-icons/ai";

export default function ChangeEmailSuccess({ onClose }) {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-p-8">
      {/* Success Icon */}
      <div className="tw-flex tw-items-center tw-justify-center tw-w-24 tw-h-24 tw-border-8 tw-border-green-500 tw-rounded-full tw-shadow-lg tw-bg-green-100">
        <AiOutlineCheck className="tw-text-6xl tw-text-green-500" />
      </div>

      {/* Success Message */}
      <p className="tw-text-lg tw-text-gray-800 tw-text-center tw-font-medium">
        การเปลี่ยนอีเมลล์สำเร็จ!
      </p>

      {/* Confirm Button */}
      <button
        onClick={handleClick}
        className="tw-bg-green-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-bg-green-600 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-200 tw-transform hover:tw-scale-105"
      >
        ตกลง
      </button>
    </div>
  );
}
