import { AiOutlineCheck } from "react-icons/ai";
import { useAuth } from "../../../logic/hook/user-auth";
export default function ChangePasswordSuccess({ onClose }) {
  const { logout } = useAuth();
  const handleClick = () => {
    onClose();
    logout();
  };
  return (
    <>
      <div className="flex justify-center gap-8 p-4 text-white">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center items-center w-24 h-24 border-8 border-blue-700 rounded-full">
            <AiOutlineCheck className="text-12xl text-blue-700" />
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-blue-700  p-4 rounded-lg hover:bg-blue-900  pl-8 pr-8"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
