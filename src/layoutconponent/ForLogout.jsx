import { useState } from "react";
import logologout from "../assets/forlogout/logologout.webp";
import Model from "../layoutconponent/Model";
import ModelForLogout from "./Model/forflow/ModelForLogout";

export default function ForLogout() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div
        className="tw-fixed tw-right-5 tw-top-2 sm:tw-right-5 sm:tw-top-2 md:tw-right-6 lg:tw-right-7 xl:tw-right-7  tw-opacity-45 tw-flex tw-justify-center
        md:tw-top-[calc(75%+4rem)] 
        lg:tw-bottom-4 xl:tw-bottom-16"
      >
        <img
          onClick={() => setOpenModel(true)}
          src={logologout}
          loading="lazy"
          alt="forlogout"
          className="tw-rounded-full tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-scale-150 hover:tw-cursor-pointer hover:tw-shadow-lg hover:tw-shadow-blue-500/50
          tw-h-6 tw-w-6
          sm:tw-w-6 sm:tw-h-6
          md:tw-w-8 md:tw-h-8
          lg:tw-w-10 lg:tw-h-10
          xl:tw-w-14 xl:tw-h-14"
        />
      </div>
      <Model
        title="ยืนยันเพื่อออกจากระบบ"
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelForLogout />
      </Model>
    </>
  );
}
