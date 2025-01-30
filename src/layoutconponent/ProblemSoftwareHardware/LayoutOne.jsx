import contactus from "../../assets/ProblemSoftwareHardware/contactus.png";
import contactusWebp from "../../assets/ProblemSoftwareHardware/contactus.webp";

export default function LayoutOne() {
  return (
    <div>
      <picture>
        <source srcSet={contactusWebp} type="image/webp" />
        <img src={contactus} alt="Contact Us" loading="lazy" />
      </picture>
    </div>
  );
}
