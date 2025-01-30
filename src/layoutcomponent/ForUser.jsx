import iconUser from "../assets/foruser/iconforuser.png";
import { Link } from "react-router-dom";
import { useAuth } from "../logic/hook/user-auth";

export default function ForUser() {
  const { authUser } = useAuth();
  return (
    <>
      <Link to="/yourprofile">
        <div
          className="tw-fixed tw-right-4 tw-opacity-95 tw-bg-custom-brown tw-flex tw-justify-center 
        tw-top-8
        sm:tw-top-8 sm:tw-right-4
        md:tw-top-3/4 md:tw-right-4 lg:tw-bottom-4 lg:tw-right-4 xl:tw-bottom-4 xl:tw-right-4"
        >
          <img
            src={authUser.profile || iconUser}
            loading="lazy"
            alt="foruser"
            className="tw-rounded-full tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-scale-110 hover:tw-cursor-pointer hover:tw-shadow-lg hover:tw-shadow-blue-500/50
          tw-h-8 tw-w-8
          sm:tw-w-8 sm:tw-h-8
          md:tw-w-12 md:tw-h-12
          lg:tw-w-16 lg:tw-h-16
          xl:tw-w-20 xl:tw-h-20"
          />
        </div>
      </Link>
    </>
  );
}
