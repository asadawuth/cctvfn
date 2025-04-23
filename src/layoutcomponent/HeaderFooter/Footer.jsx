import { TbWorldWww } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div
        className="tw-text-white tw-items-start tw-gap-8 tw-py-8 tw-flex tw-flex-col md:tw-gap-4 lg:tw-flex-row  lg:tw-gap-0 tw-justify-around"
        style={{ backgroundColor: "rgb(0, 38, 83)", color: "white" }}
      >
        <div className="tw-flex tw-gap-4">
          <BsFillTelephoneFill className="tw-text-2xl" />
          <h5>02-312-0536</h5>
        </div>
        <div className="tw-flex tw-gap-4">
          <div className="">
            <CgMail className="tw-text-2xl" />
          </div>
          <h5>sales@masscorporation.co.th</h5>
        </div>
        <div className="tw-flex tw-gap-4">
          <div className="">
            <TbWorldWww className="tw-text-2xl" />
          </div>
          <h5>https://www.masscorporation.co.th</h5>
        </div>
      </div>
    </>
  );
}
