export default function ModelForChangeEmail({
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
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-opacity-50 tw-z-40"></div>
          <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-transition-transform tw-ease-in-out tw-duration-300">
            <div
              className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-full"
              style={{ maxWidth: `${maxWidth}rem` }}
            >
              <div className="tw-flex tw-flex-col tw-p-6 tw-gap-4">
                <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-pb-4">
                  <h2 className="tw-text-lg tw-font-bold tw-text-gray-800">
                    {title}
                  </h2>
                  <button
                    className="tw-text-gray-600 hover:tw-text-red-500 tw-transition tw-duration-150"
                    onClick={onClose}
                  >
                    &#x2715;
                  </button>
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
