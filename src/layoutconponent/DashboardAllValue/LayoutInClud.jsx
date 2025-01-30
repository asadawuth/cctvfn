export default function LayoutInClud({ text, data }) {
  return (
    <div className="tw-mt-2 tw-flex tw-justify-center tw-items-center tw-h-12 tw-bg-blue-100 hover:tw-bg-blue-200 tw-rounded-lg tw-mx-auto tw-mb-2 hover:tw-cursor-pointer">
      <span className="tw-text-blue-800 tw-text-lg tw-font-semibold">
        {text} {data}
      </span>
    </div>
  );
}
