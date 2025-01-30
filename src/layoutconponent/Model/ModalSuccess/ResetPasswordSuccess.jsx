import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordSuccess() {
  const navigate = useNavigate();

  const randerLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-blue-50">
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-p-8 tw-bg-white tw-shadow-lg tw-rounded-lg tw-border tw-border-gray-200">
          <div className="tw-flex tw-justify-center tw-items-center tw-w-24 tw-h-24 tw-border-8 tw-border-blue-400 tw-rounded-full tw-bg-blue-100">
            <AiOutlineCheck className="tw-text-6xl tw-text-blue-400" />
          </div>
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-700">
            การเปลี่ยนรหัสผ่านสำเร็จ!
          </h2>
          <p className="tw-text-center tw-text-gray-500">
            คุณสามารถเข้าสู่ระบบใหม่ได้ด้วยรหัสผ่านที่คุณตั้งค่า
          </p>
          <button
            className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-6 tw-rounded-lg tw-font-semibold tw-shadow-md hover:tw-bg-blue-600 tw-transition tw-duration-200"
            onClick={randerLogin}
          >
            ไปที่หน้าล็อกอิน
          </button>
        </div>
      </div>
    </>
  );
}
