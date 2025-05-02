import { TbWorldWww } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import footer from "../../assets/forheaderandfooter/footer.png";
import footerWebp from "../../assets/forheaderandfooter/footerwebp.webp";
export default function Footer() {
  return (
    <>
      {/* <div className="tw-w-full">
        <picture className="tw-w-full">
          <source srcSet={footerWebp} type="image/webp" className="tw-w-full" />
          <img
            src={footer}
            alt="Contact Us"
            loading="lazy"
            className="tw-w-full tw-object-fill tw-h-32"
          />
        </picture>
      </div> */}

      <div
        className="tw-text-white tw-items-start tw-gap-8 tw-flex tw-flex-col md:tw-gap-4 lg:tw-flex-row  lg:tw-gap-0 tw-justify-around"
        style={{ backgroundColor: "rgb(0, 38, 83)", color: "white" }}
      >
        <div className="tw-flex tw-gap-4">
          <BsFillTelephoneFill className="tw-text-xl tw-pt-2" />
          <h5>02-312-0536</h5>
        </div>
        <div className="tw-flex tw-gap-4">
          <div className="">
            <CgMail className="tw-text-xl tw-pt-2" />
          </div>
          <h5>sales@masscorporation.co.th</h5>
        </div>
        <div className="tw-flex tw-gap-4">
          <div className="">
            <TbWorldWww className="tw-text-xl tw-pt-2" />
          </div>
          <h5>https://www.masscorporation.co.th</h5>
        </div>
      </div>
    </>
  );
}
