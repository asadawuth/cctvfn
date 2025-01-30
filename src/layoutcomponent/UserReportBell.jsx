import { BsBell } from "react-icons/bs";
import { useSocket } from "../logic/context/SocketContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserReportBell() {
  const { notificationsCount, resetNotifications } = useSocket();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/userReport") {
      resetNotifications();
    }
  }, [location, resetNotifications]);

  const handleBellClick = () => {
    resetNotifications();
    navigate("/userReport");
  };

  return (
    <div
      className="tw-fixed tw-right-12 tw-bottom-4 tw-p-2 tw-bg-blue-200 tw-opacity-80 tw-rounded-2xl tw-cursor-pointer hover:tw-bg-blue-300 tw-transition-all"
      onClick={handleBellClick}
    >
      <BsBell className="tw-text-2xl tw-text-blue-600" />
      {notificationsCount > 0 && (
        <div className="tw-absolute tw-top-0 tw-left-6 tw-bg-red-500 tw-text-white tw-rounded-full tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-text-xs tw-font-bold">
          {notificationsCount}
        </div>
      )}
    </div>
  );
}
