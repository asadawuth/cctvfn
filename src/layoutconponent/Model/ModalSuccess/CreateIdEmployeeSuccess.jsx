import { AiOutlineCheck } from "react-icons/ai";

export default function RegisterIdEmployeeSuccess({ onClose }) {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-min-h-[50vh] tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-700 tw-rounded-lg tw-p-8 tw-shadow-lg">
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-text-center tw-text-white">
        {/* Success Icon */}
        <div className="tw-flex tw-justify-center tw-items-center tw-w-28 tw-h-28 tw-bg-white tw-rounded-full tw-shadow-lg">
          <AiOutlineCheck className="tw-text-6xl tw-text-blue-500" />
        </div>

        {/* Success Message */}
        <h1 className="tw-text-2xl tw-font-semibold">
          สมัครไอดีพนักงานสำเร็จ!
        </h1>
        <p className="tw-text-sm">คุณสามารถใช้งานบัญชีพนักงานได้แล้ว</p>

        {/* Confirmation Button */}
        <button
          onClick={onClose}
          className="tw-bg-white tw-text-blue-500 tw-font-medium tw-py-2 tw-px-6 tw-rounded-full tw-shadow-md hover:tw-bg-gray-200 hover:tw-scale-105 tw-transition-all tw-duration-300"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
}
