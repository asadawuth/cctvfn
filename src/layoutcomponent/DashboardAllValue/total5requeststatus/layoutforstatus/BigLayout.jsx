export default function BigLayout({ children }) {
  return (
    <div className="tw-w-full tw-overflow-x-auto tw-my-4">
      <table className="tw-border-collapse tw-w-full tw-text-left tw-bg-white tw-shadow-lg tw-rounded-lg ">
        <thead>
          <tr className="tw-bg-gray-200 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider">
            <th className="tw-px-1 tw-py-2 tw-border tw-text-center">ID</th>
            <th className="tw-px-4 tw-py-2 tw-border">ชื่อร้าน</th>
            <th className="tw-px-4 tw-py-2 tw-border">
              ชื่อจริง-นามสกุลเจ้าของ
            </th>
            <th className="tw-px-2 tw-py-2 tw-border tw-text-center">สถานะ</th>
            <th className="tw-py-2 tw-border tw-text-center">ดูข้อมูล</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
