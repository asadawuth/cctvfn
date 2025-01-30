export default function Item({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <tr key={index} className="tw-border-b">
          <td className="tw-py-2 tw-px-4">{item.id}</td>
          <td className="tw-py-2 tw-px-4">{item.temperature}</td>
          <td className="tw-py-2 tw-px-4">{item.humidity}</td>
          <td className="tw-py-2 tw-px-4">{item.pm2p5}</td>
          <td className="tw-py-2 tw-px-4">{item.illumination}</td>
          <td className="tw-py-2 tw-px-4">{item.voltage}</td>
          <td className="tw-py-2 tw-px-4">{item.current}</td>
          <td className="tw-py-2 tw-px-4">{item.power}</td>
          <td className="tw-py-2 tw-px-4">{item.freq}</td>
        </tr>
      ))}
    </>
  );
}
