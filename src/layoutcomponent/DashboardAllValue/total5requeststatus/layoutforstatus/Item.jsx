import { TbDatabase } from "react-icons/tb";

export default function Item({ dataStatus }) {
  console.log(dataStatus);
  return (
    <>
      {dataStatus.map((item, index) => (
        <tr
          key={item.id}
          className={`tw-border-b hover:tw-bg-gray-100 ${
            index % 2 !== 0 ? "tw-bg-gray-50" : ""
          }`}
        >
          <td className="tw-px-4 tw-py-2 tw-text-center"> {item.rowNumber}</td>
          <td className="tw-px-4 tw-py-2">{item.name}</td>
          <td className="tw-px-4 tw-py-2">
            {item.user?.firstName} {item.user?.lastName}
          </td>
          <td
            className={`tw-px-4 tw-py-2 tw-text-center ${
              item.status === "ไม่ผ่าน" ||
              item.status === "สำเร็จ" ||
              item.status === "ขอเอกสารเพิ่ม"
                ? "tw-text-white"
                : ""
            }`}
            style={{
              background:
                item.status === "ส่งเรื่องแล้ว"
                  ? "rgb(173, 216, 230)"
                  : item.status === "กำลังเช็คเอกสาร"
                  ? "rgb(100, 149, 237)"
                  : item.status === "ขอเอกสารเพิ่ม"
                  ? "rgb(65, 105, 225)"
                  : item.status === "สำเร็จ"
                  ? "rgb(30, 80, 190)"
                  : item.status === "ไม่ผ่าน"
                  ? "rgb(0, 50, 130)"
                  : "",
            }}
          >
            {item.status}
          </td>
          <td className="tw-px-4 tw-py-2 tw-text-center">
            <a
              href={`userShop/alldatashop/${item.id}`}
              className="tw-text-blue-500 hover:tw-underline"
            >
              <div className="tw-flex tw-justify-center">
                <TbDatabase className="tw-text-2xl" />
              </div>
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}
