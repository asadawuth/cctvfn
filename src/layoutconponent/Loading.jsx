import { MdDownloading } from "react-icons/md";

export default function Loading() {
  return (
    <>
      <div className="tw-fixed tw-inset-0 tw-bg-black  tw-opacity-5 tw-z-10"></div>
      <div className="tw-fixed tw-inset-8 tw-z-50">
        <div className="tw-flex tw-items-center tw-justify-center tw-min-h-full tw-text-white tw-text-4xl">
          <MdDownloading className="tw-text-9xl tw-animate-spin tw-text-blue-800" />
        </div>
      </div>
    </>
  );
}
