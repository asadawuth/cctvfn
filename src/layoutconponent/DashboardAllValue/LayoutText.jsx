export default function LayoutText({ text, style = "tw-text-xs" }) {
  return (
    <>
      <div className="tw-bg-blue-50 tw-p-4 tw-rounded-lg tw-shadow-md tw-duration-300">
        <h3
          className={`tw-font-extrabold tw-text-gray-900 tw-tracking-wide tw-text-center ${style}`}
        >
          {text}
        </h3>
        <div className="tw-h-1 tw-w-full tw-bg-gradient-to-r tw-from-blue-400 tw-to-blue-600 tw-rounded-full tw-mt-2"></div>
      </div>
    </>
  );
}
