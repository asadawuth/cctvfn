export default function ModelForComment({
  title,
  children,
  maxWidth = 34,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <>
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-opacity-70 tw-z-45"></div>
          <div className="tw-fixed tw-inset-0 tw-z-50">
            <div className="tw-flex tw-justify-center tw-items-center tw-min-h-full">
              <div
                className="tw-bg-white tw-text-black tw-rounded-lg tw-w-full tw-shadow-lg tw-p-6"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                <div className="tw-flex tw-justify-between tw-items-center tw-pb-4 tw-border-b tw-border-gray-300">
                  <h2 className="tw-font-serif tw-text-2xl tw-font-thin tw-text-gray-800">
                    {title}
                  </h2>
                  <button
                    className="tw-text-gray-500 tw-bg-gray-100 tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full hover:tw-bg-gray-200 tw-transition-all tw-duration-200"
                    onClick={onClose}
                  >
                    ✕
                  </button>
                </div>
                <div className="tw-mt-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
