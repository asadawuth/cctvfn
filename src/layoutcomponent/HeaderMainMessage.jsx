export default function HeaderMainMessage({ text, style = "" }) {
  return (
    <div
      className={`tw-text-center lg:tw-text-xl xl:tw-text-xl tw-font-sans tw-text-gray-300 tw-p-2 ${style}`}
    >
      {text}
    </div>
  );
}
