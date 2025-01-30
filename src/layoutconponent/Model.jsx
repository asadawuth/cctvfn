export default function Modal({
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
          <div
            className={`tw-fixed tw-inset-0 tw-bg-black tw-opacity-85 tw-z-45`}
          ></div>
          <div className="tw-fixed tw-inset-0 tw-z-30">
            <div className="tw-flex tw-justify-center tw-items-center tw-min-h-full">
              <div
                className="tw-bg-white tw-text-black tw-rounded-lg tw-w-full tw-shadow-md tw-shadow-white"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                <div className="tw-flex tw-justify-between tw-p-4 tw-text-xl">
                  <div className="tw-text-white tw-cursor-default">x</div>
                  <div className="tw-font-serif tw-text-2xl tw-cursor-default">
                    {title}
                  </div>
                  <div
                    className=" tw-cursor-pointer tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-md hover:tw-scale-110 hover:tw-shadow-lg hover:tw-shadow-red-500/50 tw-transition-all tw-duration-200"
                    onClick={onClose}
                  >
                    <h1>X</h1>
                  </div>
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
