export default function Layout1Vdo() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-bg-gray-200 ">
      <video
        loading="lazy"
        src="your-video-source.mp4"
        autoPlay
        controls
        className=" tw-max-w-screen-lg  tw-shadow-lg tw-w-full tw-px-4  tw-py-4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
