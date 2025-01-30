import header from "../../assets/forheaderandfooter/header.png";
import headerWebp from "../../assets/forheaderandfooter/headerwebp.webp";

export default function HeaderBeforeLogin() {
  return (
    <>
      <div className="tw-w-full">
        <picture className="tw-w-full">
          <source srcSet={headerWebp} type="image/webp" className="tw-w-full" />
          <img
            src={header}
            alt="Contact Us"
            loading="lazy"
            className="tw-w-full tw-h-64 tw-object-fill" // ใช้ tw-h-auto แทน
          />
        </picture>
      </div>
    </>
  );
}
