import { AiFillPhone } from "react-icons/ai";
import { useSocket } from "../logic/context/SocketContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function GoToSosFormMobile() {
  const { newdataRequestSosVoiceCount, resetNotificationsSos } = useSocket();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/sosformmobile") {
      resetNotificationsSos();
    }
  }, [location.pathname, resetNotificationsSos]);

  const handleLogoSosClick = () => {
    resetNotificationsSos();
    navigate("/sosformmobile");
  };

  return (
    <div
      className="tw-fixed tw-right-48 tw-bottom-4 tw-p-2 tw-bg-blue-200 tw-opacity-80 tw-rounded-2xl tw-cursor-pointer hover:tw-bg-blue-300 tw-transition-all"
      onClick={handleLogoSosClick}
    >
      <AiFillPhone className="tw-text-2xl tw-text-blue-600" />
      {newdataRequestSosVoiceCount > 0 && (
        <div className="tw-absolute tw-top-0 tw-left-6 tw-bg-red-500 tw-text-white tw-rounded-full tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-text-xs tw-font-bold">
          {newdataRequestSosVoiceCount}
        </div>
      )}
    </div>
  );
}
