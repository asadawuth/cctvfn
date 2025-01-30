export default function BigLayout({ children }) {
  return (
    <>
      <hr />
      <div className="tw-w-full tw-p-4 tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4  2xl:xl:tw-grid-cols-4">
        {children}
      </div>
    </>
  );
}
