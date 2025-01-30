export default function TextError({ text, style = "" }) {
  return <span className={`tw-text-red-500 ${style}`}>{text}</span>;
}
