export default function ModelForIntegratedInformation({
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
          {/* Background Overlay */}
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-opacity-75 tw-z-40"></div>

          {/* Modal Container */}
          <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-justify-center tw-items-center">
            <div
              className="tw-bg-white tw-text-black tw-rounded-lg tw-w-full tw-shadow-2xl tw-overflow-hidden tw-transform tw-transition-all tw-scale-100"
              style={{ maxWidth: `${maxWidth}rem` }}
            >
              {/* Header */}
              <div className="tw-bg-blue-700 tw-text-white tw-p-4 tw-flex tw-justify-between tw-items-center">
                <h2 className="tw-font-bold tw-text-xl tw-tracking-wide">
                  {title}
                </h2>
                <button
                  className="tw-bg-red-600 tw-text-white tw-w-8 tw-h-8 tw-rounded-full tw-flex tw-items-center tw-justify-center hover:tw-bg-red-700 hover:tw-scale-110 tw-transition-transform tw-duration-200"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="tw-p-6 tw-text-gray-800 tw-space-y-4">
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
