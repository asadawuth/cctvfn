export default function BigLayout({ children }) {
  return (
    <>
      <div className="tw-w-full tw-overflow-x-auto">
        <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-shadow-lg tw-rounded-lg">
          <thead className="tw-bg-gray-200 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider">
            <tr>
              <th className="tw-py-2 tw-px-4">ID</th>
              <th className="tw-py-2 tw-px-4">อุณภูมิ</th>
              <th className="tw-py-2 tw-px-4">ความชื้น</th>
              <th className="tw-py-2 tw-px-4">ค่าฝุ่น</th>
              <th className="tw-py-2 tw-px-4">ความสว่าง</th>
              <th className="tw-py-2 tw-px-4">แรงดัน</th>
              <th className="tw-py-2 tw-px-4">กระแสไฟฟ้า</th>
              <th className="tw-py-2 tw-px-4">กำลังไฟฟ้า</th>
              <th className="tw-py-2 tw-px-4">ความถี่</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
