import { useSocket } from "../logic/context/SocketContext";
import { RiShoppingCartLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserReQuest() {
  const { shopRequestCount, resetShopRequestNotifications } = useSocket();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/report-request") {
      resetShopRequestNotifications();
    }
  }, [location, resetShopRequestNotifications]);

  const handleBellClick = () => {
    resetShopRequestNotifications();
    navigate("/report-request");
  };

  return (
    <div
      onClick={handleBellClick}
      className="tw-fixed tw-right-24 tw-bottom-4 tw-p-2 tw-bg-blue-200 tw-opacity-80 tw-rounded-2xl tw-cursor-pointer hover:tw-bg-blue-300 tw-transition-all"
    >
      <RiShoppingCartLine className="tw-text-2xl tw-text-blue-600" />
      {shopRequestCount > 0 && (
        <div className="tw-absolute tw-top-0 tw-left-6 tw-bg-red-500 tw-text-white tw-rounded-full tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-text-xs tw-font-bold">
          {shopRequestCount}
        </div>
      )}
    </div>
  );
}
