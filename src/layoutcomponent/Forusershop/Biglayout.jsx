export default function Biglayout({ children }) {
  return (
    <div className=" tw-w-full tw-gap-4 tw-p-4 tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-4 tw-justify-center tw-items-center tw-mb-2">
      {children}
    </div>
  );
}
