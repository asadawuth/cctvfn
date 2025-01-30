import pathNotFound from "../assets/forpathnotfound/pathnotfound.png";
import pathNotFoundwebp from "../assets/forpathnotfound/pathnotfoundwebp.webp";
import { Link } from "react-router-dom";

export default function PathNotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <picture>
        <source srcSet={pathNotFoundwebp} type="image/webp" loading="lazy" />
        <img
          src={pathNotFound}
          alt="Notpath"
          loading="lazy"
          className="w-1/2 max-w-md"
        />
      </picture>
      <Link to="/">
        <button className="tw-bg-blue-400 hover:tw-bg-blue-600 tw-text-white hover:tw-px-16 tw-px-8 tw-py-2">
          Back to Website
        </button>
      </Link>
    </div>
  );
}
